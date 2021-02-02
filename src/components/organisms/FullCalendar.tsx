import React from "react";
import { useSharedStory } from "../../hooks/useSharedStory";
import { useStoryList } from "../../hooks/useStoryList";
import { useAgeContext } from "../../hooks/useAgeContext";
import { useEventsHandler } from "../../hooks/useEventsHandler";
import { FullCalendarBase } from "../atoms/FullCalendarBase";

export const FullCalendar = () => {
  const { birth } = useAgeContext();
  const [sharedEvents, sharedResources, generateSharedEvents] = useSharedStory();
  const { events, select, click, set: setEvents } = useEventsHandler();
  const { stories, generate } = useStoryList();
  
  const storyResources = React.useMemo(() => stories.reduce((prev,story) => ([...prev, ...story.resources]), []), [stories]);
  const storyEvents = React.useMemo(() => stories.reduce((prev, story) => ([...prev, ...story.events]), []), [stories]);

  const _resources = React.useMemo(
    () => [...sharedResources, ...storyResources],
    [sharedResources, storyResources]
  );

  const _events = React.useMemo(() => [...sharedEvents, ...storyEvents], [
    sharedEvents,
    storyEvents,
  ]);


  React.useEffect(() => {
    generate(birth);
  }, [generate, birth]);

  React.useEffect(() => {
    setEvents(_events);
  }, [_events, setEvents]);

  React.useEffect(() => {
    generateSharedEvents(birth);
  }, [birth, generateSharedEvents]);

  return (
    <FullCalendarBase
      events={events}
      resources={_resources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
    />
  );
};
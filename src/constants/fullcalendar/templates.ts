import { FIELD } from "./settings";

export const DARK_BLUE = "#00008b";
const GREEN = "#206a5d";
// const YELLOW = "#ffd700";
const RED = "#c70039";
const PURPLE = "#440a67";

const EVENT_VISA_BG = GREEN;
const EVENT_STATUS_BG = DARK_BLUE;
const EVENT_TASK_BG = PURPLE;

/************************
 * Resources
 ************************/
export const RESOURCE_TEMPLATE__VISA_STUDY = {
  [FIELD]: "📝Study VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__VISA_COOP = {
  [FIELD]: "📝Co-op VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__VISA_WORKING_HOLIDAY = {
  [FIELD]: "📝Working Holiday VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__VISA_PGWP = {
  [FIELD]: "📝PGWP VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__STATUS = {
  [FIELD]: "💁Status",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__TASK_Submit_Application = {
  [FIELD]: "✅Submit Application",
  eventBorderColor: DARK_BLUE,
};

/************************
 * Events
 ************************/
export const EVENT_TEMPLATE__VISA_COOP = {
  title: "🎓Co-op VISA",
  backgroundColor: EVENT_VISA_BG,
};

export const EVENT_TEMPLATE__VISA_STUDY = {
  title: "✍️Study VISA",
  backgroundColor: EVENT_VISA_BG,
};

export const EVENT_TEMPLATE__VISA_PGWP = {
  title: "🎓PGWP VISA",
  backgroundColor: EVENT_VISA_BG,
};

export const EVENT_TEMPLATE__VISA_WORKING_HOLIDAY = {
  title: "🌎Working Holiday VISA",
  backgroundColor: EVENT_VISA_BG,
};

export const EVENT_TEMPLATE__VISA_READY_WORKING_HOLIDAY = {
  title: "🏃‍♂️Ready for Working Holiday VISA",
  backgroundColor: RED,
};

export const EVENT_TEMPLATE__STATUS_WORKER = {
  title: "🧑🏻‍💼Worker",
  backgroundColor: EVENT_STATUS_BG,
};

export const EVENT_TEMPLATE__STATUS_STATUS = {
  title: "🧑‍🎓Student",
  backgroundColor: EVENT_STATUS_BG,
};

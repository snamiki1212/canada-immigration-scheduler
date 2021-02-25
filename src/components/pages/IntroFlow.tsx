import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { PolicyExplanation } from "../atoms/PolicyExplanation";
import { useModal } from "../../hooks/useModal";
import { useUserCalendar } from "../../hooks/useUserCalendar";
import { useUser } from "../../hooks/useUser";
import { ProfileOption } from "../organisms/ProfileOption";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

export function IntroFlow() {
  const { calendar } = useUserCalendar();
  const shouldSkipIntroFlow = !!calendar;
  const { isOpen, close } = useModal(!shouldSkipIntroFlow);
  const { init: initUserCalendar } = useUserCalendar();
  const { birth } = useUser();
  const { options } = useTemplateOptions();
  const workingholidayPeriod = React.useMemo(
    () => options.workingholidayPeriod,
    [options.workingholidayPeriod]
  );

  const handleFinish = React.useCallback(() => {
    initUserCalendar({ birthday: birth, workingholidayPeriod });
    close();
  }, [close, initUserCalendar, birth, workingholidayPeriod]);

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Welcome to Plangoab🐱</DialogTitle>
      <DialogContent>
        <p>
          hi👋👋
          <br />
          <br />
          Plangoab helps you to create awesome plan to go abroad!
          <br />
          <br />
          Let's input your birthday and create your plans✈️
        </p>
        <ProfileOption />
        <PolicyExplanation />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFinish} variant="contained" color="primary">
          ✈️Create Calendar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

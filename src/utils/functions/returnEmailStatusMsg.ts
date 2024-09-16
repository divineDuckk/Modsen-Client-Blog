export const returnEmailStatusMsg = (
  sending: boolean,
  success: boolean,
  initialMsg = "Subscribe",
) => {
  if (sending) return "Sending...";
  else if (success) return "Success";
  else return initialMsg;
};

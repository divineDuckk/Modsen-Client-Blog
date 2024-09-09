export const returnEmailStatusMsg = (sending: boolean, success: boolean) => {
  if (sending) return "Sending...";
  else if (success) return "Success";
  else return "Subscribe";
};

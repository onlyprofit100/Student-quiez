// This would handle API calls related to sessions
export const getSessions = () => {
  return fetch('/api/sessions').then(res => res.json());
};

import { LOCAL_STATE } from "../constants/localStorage";

const loadState = () => {
  try {
    const storedItems = localStorage.getItem(LOCAL_STATE);
    return storedItems ? JSON.parse(storedItems) : [];
  } catch (err) {
    return undefined;
  }
};

const saveState = (data: any) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(LOCAL_STATE, serializedState);
  } catch {}
};

export { loadState, saveState };

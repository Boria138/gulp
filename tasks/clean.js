import { deleteAsync } from "del";

const clean = () => {
  return deleteAsync([app.path.buildFolder]);
};

export default clean;

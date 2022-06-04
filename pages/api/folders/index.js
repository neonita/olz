import { folders } from "../../../folderData";

export default function handler(req, res) {
  res.status(200).json(folders);
}

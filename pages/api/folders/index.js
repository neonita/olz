// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { folder_data } from "../../../folder_data";

export default function handler(req, res) {
  res.status(200).json(folder_data);
}

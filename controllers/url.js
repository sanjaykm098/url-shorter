import { nanoid } from "nanoid";
import { URL } from "../models/url.js";
async function handleLongUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json("Please Pass the URL");
  }
  const length = 7;
  const shortId = nanoid(length);
  await URL.create({
    shortId,
    redirectUrl: body.url,
    totalClicks: 0,
  });

  return res.json({
    shortId,
    redirectUrl: body.url,
  });
}
async function handleShortUrl(req, res) {
  const shortId = req.params.shortId;
  const url = await URL.findOne({ shortId });
  if (!url) {
    return res.status(404).json("URL Not Found");
  }
  url.totalClicks += 1;
  await url.save();
  return res.redirect(url.redirectUrl);
}
export { handleLongUrl, handleShortUrl };

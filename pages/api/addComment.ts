// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CommentBody } from "../../typings";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: CommentBody = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: "comment",
          comment: data.comment,
          username: data.username,
          profileImg: data.profileImg,
          tweet: {
            _type: "reference",
            _ref: data.tweetId,
          },
        },
      },
    ],
  };

  const apiEndpoint = `https://bd6tqs3y.api.sanity.io/v2021-06-07/data/mutate/production`;

  const result = await fetch(apiEndpoint, {
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer " +
        "skDtmQtfgF4G6tSZ8EwfziPywliMYkphj4fjth0vh1RP4RyOFhioBpgo3k1QbmEQV2GcUsfp8QT4UZvoisytNpmNtP04Sod4IAycNz6weDalKqalEq2gBZGN8BUm7ZnJHxlttVz63xcCAZA3ZNSETED44aQYh5FAqalfQZ5WJkmUVuyQDnGr",
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });

  const json = await result.json();

  res.status(200).json({ message: "Added Comment!" });
}

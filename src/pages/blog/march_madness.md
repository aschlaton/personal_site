---
layout: ../../layouts/BlogPostLayout.astro
title: "March Madness"
date: "2026-03-22"
description: "⛹️"
---

Kalshi somewhat recently announced their [$1 billion March Madness bracket challenge](https://kalshi.com/billion-dollar-bracket). It's pretty obviously not going to pay out, but Kalshi [still bothered to have the prize insured](https://defirate.com/news/best-march-madness-bracket-contests-2026/).

Now, if someone *did* manage to create a perfect bracket, what would happen if Kalshi refused to pay the prize out? Obviously the winner would sue. But the odds of a legitimate perfect bracket are so low that it's arguably more likely that the person won illegitimately.

I don't really know anything about this topic legally, but from my understanding Kalshi would have to prove that there is a greater than 50% chance that the alleged "victor" cheated. Basically, Kalshi would have to prove that P_honest < P_cheated * P_win_given_cheated. P_win_given_cheated is reasonably close to 1, and while P_cheated is a bit harder to compute, they could point to previous data hacks as a baseline estimate.

For P_honest, we can use some rough estimates. The geometric mean of the true[^1] winning probabilities of the favorite team in each of the 63 games in March Madness is probably around 0.75. Then the winning bracket would have odds of (0.75)^63, or about 0.000000013454. This isn't that unreasonable. There are tens of millions of players every year too, so it's not that unlikely that there'd be a winning bracket among them[^2].

But what if March Madness [got expanded](https://www.youtube.com/watch?v=cxyPeME9TbI)? And what if Kalshi started requiring exact score predictions to win? At some point the probability that the winner cheated become so high that even without any solid evidence, Kalshi could argue that the improbability of a legitimate win is evidence enough.

I'm sure there's a legal basis for Kalshi still having to pay out, because otherwise we'd see more competitions like this for some free publicity. But I'd be curious to see if there's a probability threshold below which the court would just rule against the winner for a lack of credibility.

[^1]: The term "true" here is a bit wishy-washy. I think even the most charitable definition (something like "with the combined knowledge of everyone in the world") wouldn't give a true geometric mean that is drastically greater than 0.75.
[^2]: A lot of charitable assumptions were made here for this 1.34e-8 estimate; the real-world odds with imperfect knowledge are likely much lower.

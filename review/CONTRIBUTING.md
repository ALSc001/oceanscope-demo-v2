# Contributing to the region B review

Open [the case](https://alsc001.github.io/oceanscope-demo-v2/?review=b-pair&metric=bias#analysis-height) and choose a metric. The share link opens the same case and metric. [Case discussion](https://github.com/ALSc001/oceanscope-demo-v2/issues/1).

To propose a code change, use the edit link beside the metric selector. GitHub may ask you to sign in or fork the public repository. Edit the readable `review/b-case-metrics.js` file and propose a pull request. Include the case link and the expected meaning, units and readout for frames 1050 and 1054. The browser loads this module to calculate the displayed values.

Each metric has a stable id, labels in both languages and a read function accepting one verified frame row. Length values in this selector use scene units. Missing samples should produce a missing value. Preserve existing ids because shared links refer to them.

For maintainers: apply a reviewed metrics diff to `public-review/review/b-case-metrics.js` in the application repository. Build and verify the release from that commit, including the module checksum. Publish the matching release to Demo v2 and link the version in the originating public PR or issue. The existing Pages workflow checks the manifest before deploying.

The B-case editor previews new or edited metric definitions on frames 1050 and 1054. The default new definition reads ROI height RMSE (scene units) over common native columns. Download the patch, review the one-file diff and apply it on a proposal branch. The submission panel checks main, the proposed file and the branch diff before offering a GitHub comparison or an existing PR. If a branch has not been prepared, use the GitHub file editor with the provided candidate code on a new branch or fork. Previews and proposals are distinct from published metrics. The precision field controls display rounding only.

---
version: 1
slug: "landing-page-src-pages-index-astro"
primary_target: "landing_page/src/pages/index.astro"
related_targets: []
---

# Landing page (pre-launch, WhatsApp orders)

Scope: `landing_page/src/pages/index.astro`, single page. Mode: Persuade.
Audience: the caring chooser (primary), considered indulger (secondary), India.
Action: Order on WhatsApp (`wa.me/919730471041`, pre-filled "Hi, I want to place an order"). Secondary: See the ingredients.
Proof: generated photography in `brand/images/`; verified ingredient list; no refined sugar; contains protein; allergens tree nuts and milk.
Constraints: product is "Palm and Pod fudge brownie", no product name. No nutrition numbers, prices, testimonials.

## Direction contract

THESIS: The page is a sequence of posters, one photograph and one short line each, following Design.md's poster recipe as a scroll. It refuses the category default of a hero followed by icon-tile benefit cards and a feature grid.

OWN-WORLD: Cocoa Hearth and Oat Milk own the page. Full-bleed warm photography, Fraunces 600 at poster scale, Manrope for facts. One protective-arch crop per screen at most. Butter Gold only as a glint (focus ring, a rule). Buttons are 12–16px-radius cocoa slabs. Ground is the photos' own paper, #F3E4CF (Oat Milk sampled from the photography), so image edges vanish. Cited adaptations: the masthead is a solid oat bar because the hero photo's top edge is dark wood that fails contrast; the sharing poster is a 7/5 split because that photo has no quiet side to hold text without covering the hands.

STORY: See it and want it (break, texture). Understand it (it opens into its eleven ingredients; allergens stated plainly). Feel it belongs at home (sharing). Order on WhatsApp.

FIRST VIEWPORT: `hero-desktop` full-bleed with the brownie on the right. Left 45%: small "Palm and Pod" wordmark top-left; "Chocolate joy, made with care." at ~96px; one line of Manrope; primary cocoa button "Order on WhatsApp" plus a text link "See the ingredients". Mobile uses `hero-mobile`, text in the top 40%.

FORM: Poster sequence, #6 on the ordered list, seed key 75b25267. Signature interaction: a pinned poster where the whole brownie crossfades and settles into the exploded ingredient view as you scroll. Motion grammar: slow push-in of each poster photo (scale 1.06 to 1), headlines rising 16px over 360ms, all disabled under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

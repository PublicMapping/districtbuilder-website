---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
permalink: "/"
page_class: p-home
partials_location: "_home/"

# NO EDITING ABOVE THIS LINE
# # # # # #

seo_description: ""
title: "Home"

# # # # # #
# Page copy

# hero section
hero: 
  mini-title: "Together"
  icon: "fas fa-map"
  title: "We can build a better map"
  blurb: "DistrictBuilder puts the power of drawing electoral maps in the hands of the people. Redistricting can be a transparent process that represents communities fairly and prevents gerrymandering."
  image-url: "./assets/images/photo-woman-journalist-in-meeting.jpg"
  image-alt: "Woman journalist in meeting with paper presenting to colleagues."
  cta:
    blurb: "DistrictBuilder is a **free** and **open source** redistricting tool."
    button-text: "Try it out"
    button-url: "https://app.districtbuilder.org/register"
    button-style: "primary"
    icon: "fas fa-sparkles"
# hero section

# features section
features:
  title: "Accurate down to the block"
  blurb: "DistrictBuilder’s software gives you access to the same block-level data used in legal redistricting plans — for free. Come to the table with electoral maps that better reflect local communities and lead to fair representation."
  image-url: "./assets/images/districtbuilder_screenshot.png"
  image-alt: "Screenshot of DistrictBuilder."
  button-text: "Start now"
  button-url: "https://app.districtbuilder.org/register"
  feature-list:
    - title: "Uncover inequalities"
      blurb: "Create custom communities of interest and visualize the effects of gerrymandering."
      icon: "fal fa-search"
    - title: "Engage your audience"
      blurb: "Easily export your custom map, embed in an article, or share on social media."
      icon: "fal fa-users-class"
    - title: "Build beautiful maps"
      blurb: "Rapidly draw visually engaging and informative maps in our modern interface."
      icon: "fal fa-hammer"
# features section

# testimonials section
testimonials:
  mini-title: "Kind words"
  icon: "fas fa-comments"
  title: "What the redistricting community is saying"
advocacy-groups:
  icon: "fas fa-person-sign"
  title: "Advocacy groups are using DistrictBuilder to lead change"
# testimonials section

# community section
community:
  mini-title: "Join"
  icon: "fas fa-users"
  title: "Draw fair districts for every state"
  buttons:
    - text: "Draw your own"
      url: "https://app.districtbuilder.org/register"
    - text: "Share your project"
      url: "mailto:support@districtbuilder.com"
      icon: "fas fa-paper-plane"
      style: "secondary"
# community section

# resources section
resources:
  mini-title: "Delve deeper"
  icon: "fas fa-books"
  title: "Redistricting resources and information"
  blurb: "Explore questions of proportionality, competitiveness, contiguity, and more, as new legal decisions, public oversight, and technology change the criteria for drawing electoral districts."
# resources section

# closing call-to-action section
closing: 
  image-url: "./assets/images/photo-protestors-with-journalists.jpg"
  image-alt: "Protestor talking to journalist on the street."
  blurb: "Build the map that demands fair representation"
  button-text: "Start now"
  button-url: "https://app.districtbuilder.org/register"
# closing call-to-action section

---

{% include {{ page.partials_location }}home.html %}

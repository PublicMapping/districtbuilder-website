---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
permalink: "/"
page_class: p-home
partials_location: "_home/"

# NO EDITING ABOVE THIS LINE
# # # # # #

title: "The Free and Open Source Redistricting Tool"

# # # # # #
# Page copy

# banner
banner:
  icon: "fas fa-bell-on"
  blurb: "Check out winners of the #MapAcrossAmerica redistricting contest!"
  button:
    style: "plum"
    url: "https://medium.com/districtbuilder/map-across-america/home"
    text: "See the maps"
# banner

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
  image-url: "./assets/images/DistrictBuilder_Screenshot.png"
  image-alt: "Screenshot of DistrictBuilder."
  button-text: "Start now"
  button-url: "https://app.districtbuilder.org/register"
  feature-list:
    - title: "Build beautiful maps"
      blurb: "Rapidly draw visually engaging and informative maps in our modern interface."
      icon: "fal fa-hammer"
    - title: "Analyze your map"
      blurb: "Evaluate population demographics and analyze with commmon redistricting metrics."
      icon: "fal fa-search"
    - title: "Engage your audience"
      blurb: "Easily export your custom map and share in an article, on social media, or anywhere online."
      icon: "fal fa-users-class"
  secondary-feature:
    image-url: "./assets/images/DistrictBuilder_ScreenshotOrganization.png"
    image-alt: "Group of people in an office around laptops while a woman presents."
    title: "Build your community with Organization Pages"
    blurb: "Organizations give groups of concerned citizens, nonprofits, or redistricting commissions the tools to create their own community on DistrictBuilder and engage the public in the redistricting process. It's a place to map collaboratively, highlight the group's goals, showcase maps that the community has created, or display official proposed maps."
    button-text: "Create an organization"
    button-url: "/organizations"
# features section

# community section
community:
  mini-title: "Join"
  icon: "fas fa-users"
  title: "Draw fair districts for every state"
  buttons:
    - text: "Draw your own"
      url: "https://app.districtbuilder.org/register"
    - text: "Share your project"
      url: "mailto:districtbuilder@azavea.com"
      icon: "fas fa-paper-plane"
      style: "secondary"
  cta:
    style: "light"
    blurb: "**Ask the right questions.** DistrictBuilder helps you understand the impact of partisan gerrymandering on redistricting"
    button-text: "Sign up"
    button-url: "https://app.districtbuilder.org/register"
    button-style: "blue"
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

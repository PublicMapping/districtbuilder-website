---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
permalink: "/organizations"
page_class: p-home
partials_location: "_home/"

# NO EDITING ABOVE THIS LINE
# # # # # #

title: "Engage your audience with a custom Organization Page"

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
  title: "Engage your audience with a custom Organization Page"
  blurb: "Organizations give groups of concerned citizens, nonprofits, or redistricting commissions the tools to create their own community on DistrictBuilder and engage the public in the redistricting process."
  image-url: "./assets/images/photo-organization.jpg"
  image-alt: "Woman journalist in meeting with paper presenting to colleagues."
  cta:
    blurb: "Drive public engagement with DistrictBuilder Organizations."
    button-text: "Create an organization"
    button-url: "/contact"
    button-style: "primary"
    icon: "fas fa-sparkles"
# hero section

# value prop section
value-prop:
  title: "Completely Custom Redistricting"
  blurb: "Organizations provide a customized way to engage the public with redistricting: your own logo, text, data, templates, and featured maps."
  value-list:
    - blurb: "Templates ensure that users start mapping with the correct settings for your organization: the right data, population deviation, and overlays. Templates can be set up for existing districts, blank maps to start from scratch, or to draw community of interest maps."
      image-url: "./assets/images/icon-templates.png"
      image-alt: "An icon of a several squares in a template design. "
    - blurb: "Organization pages enable redistricting at every level: cities, counties, school boards, and special districts. We supply official Census data at the Block and Blockgroup level. Other aggregations are possible with your Organization's official data."
      image-url: "./assets/images/icon-scale.png"
      image-alt: "An icon of several squares showing scalability. "
    - blurb: "We provide managed hosting for your Organization, which includes feature enhancements, security patches, and scaling of cloud infrastructure so you never need to worry about database storage. In addition, unlimited users can join your organization."
      image-url: "./assets/images/icon-hostinig.png"
      image-alt: "An icon of a server and cloud representing cloud hosting. "
# value prop section

# features section
features:
  title: "Publicly feature awesome maps"
  blurb: "Feature your community or commission's best maps with our Featured Maps section. They can serve as a showcase for a public competition, highlight maps by special interest groups, or display official proposed maps. Featured maps are selected by the Organization administrator, giving them control over how to best curate maps."
  image-url: "./assets/images/DistrictBuilder_ScreenshotOrganization.png"
  image-alt: "Screenshot of DistrictBuilder."
  sp-cta:
    image-url: "./assets/images/photo-danecounty.png"
    image-alt: "A screen capture of DistrictBuilders interface for Dane County. "
    mini-title: "Case Study"
    title: "Get the public involved with DistrictBuilder Organizations"
    blurb: "The Dane County Redistricting Commission (Dane County, Wisconsin) used DistrictBuilder Organizations to collect and analyze public map submissions for redistricting of their county supervisory districts. Dane County collected dozens of map submission from the general public, who were able to draw maps using official Census data for county wards. Additionally, they showcased the eight proposed maps drawn by members of the commission. All the maps are grouped on one page so the public can view and analyze the different options."
    button:
      text: "Create an organization"
      url: "/contact"
      style: "plum"
# features section

# testimonials section
testimonials:
  mini-title: "Kind words"
  icon: "fas fa-comments"
  title: "What the redistricting community is saying"
advocacy-groups:
  icon: "fas fa-person-sign"
  title: "Organizations are using DistrictBuilder to engage the public in redistricting"
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

# closing call-to-action section
closing:
  image-url: "./assets/images/photo-aerial-photo-of-neighborhood.jpg"
  image-alt: "Aerial imagery of a community of homes and apartment buildings."
  blurb: "Build your redistricting community"
  button-text: "Create an organization"
  button-url: "/contact"
# closing call-to-action section
---

{% include {{ page.partials_location }}home.html %}

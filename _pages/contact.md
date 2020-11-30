---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: "/contact"
page_class: p-contact
js_dependencies: 
- 'jquery-3.5.1.min.js'
- 'jquery.validate.min.js'
- 'contact-form.js'

# NO EDITING ABOVE THIS LINE
# # # # # #

seo_description: "DistrictBuilder is a free and open source redistricting tool. Questions or feedback? We’d love to hear from you."
title: "Contact us"

# # # # # #
# Page copy

# hero section
hero: 
  mini-title: "Contact us"
  icon: "fas fa-paper-plane"
  title: "Questions or feedback? We’d love to hear from you."
  image-url: "./assets/images/photo-journalists-taking-notes.jpg"
  image-alt: "Journalists at a meeting taking notes."
# hero section

---

<div class="contact-card">
    {% include contact-form.html %}
</div>

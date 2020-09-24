
# DistrictBuilder website
A guide that contains visual assets (logos, color palettes, logo do’s and don’ts, etc) and guiding principles (blog writing tips, accessibility tools, resources, etc).
 1. [Developing locally](#developing-locally)
 2. [Site Structure](#site-structure)
 3. [Editing the site configuration](#editing-the-site-configuration)
 4. [Editing Pages](#editing-pages)
 5. [Data files](#data-files)




## Developing locally
### Requirements
- Vagrant 2.1+
- VirtualBox 5.2+

### Getting Started
From your workstation, execute the following command to bring up a Vagrant virtual machine with all of the necessary dependencies installed:

```bash
$ ./scripts/setup
```

Next, login to the Vagrant virtual machine and launch the Jekyll services:

```bash
$ vagrant ssh
$ ./scripts/server
```

If `server` isn't running, or to trigger a build of Jekyll's static website output, use:

```bash
$ ./scripts/update
```

### URLS
In order to access the content served by Jekyll, and the LiveReload endpoint, use the following links:

| Service | URL                                              |
| ------- | ------------------------------------------------ |
| Jekyll  | [`http://localhost:4000`](http://localhost:4000) |




## Site Structure
### Data: `./_data/`
Within the data folder are YAML files, holding structured data used by other components of the website.
- `nav.yml` This includes navigation information that will be used for the primary navigation and footer navigation.
- `testimonials.yml` Any testimonials that DistrictBuilder gets can be referenced here. If there are no testimonials, the section displaying them will not appear.
- `community-maps.yml` Community maps are features from users of Districtbuilder. These will be manually emailed to `info@districtbuilder.org`. If there are no entries, the section displaying them will not appear.
- `articles.yml` Resources or mentions that may be useful to users of the application or folks generally interested in redistricting.
- `advocacy-group-logos.yml` Advocacy groups that we are working with.

### Includes `./_includes/`
Includes are `html` partials used in creating the structure of the pages. These rarely change. They all pull from .yml files or front matter.

### Layouts `./_layouts/`
Layouts are the skeleton of every page. These rarely change.

### Pages `./_pages/`
Pages make up the bulk of the site. See [Editing pages.](#editing-pages)

### Sass `./_sass/`
We use `.scss` for styling. 

### Site `./_site/`
The compiled jekyll site which is served on Github Pages. Do not edit files within.

### Downloads `./downloads/`
Contains assets that users of the guide can download from the site, such as .zip, .ai, .scss files.

### Images `./images/`
Contains imagery used in the frontend of the site, such as logos, font examples, and dos and don’ts. 

### CSS `./css/`
Should contain only one file: `main.scss` which includes every file from the above sass directory.




## Editing the site configuration
### Jekyll Config
The `_config.yml` file contains a few very important site settings. This is a [YAML](https://github.com/Animosity/CraftIRC/wiki/Complete-idiot%27s-introduction-to-yaml) file. YAML keeps data stored as keys and values associated to those keys. For example:

```yaml
key: value
title: DistrictBuilder
...
```

When you make changes to this file, you must rebuild the entire website for the changes to take effect. If you're working locally, this means you will want to restart `./scripts/server`. The most common settings to change are the following:

- SEO Description and Email

#### SEO Description and Email
The first section of the config controls the default SEO values used across the site (`title` and `description`).

Additionally, there is an option to set the email address for the website. *support@districtbuilder.org is currently used*





## Editing Pages
Main pages of the website can be located within the `_pages` directory of the repo. Notably, the some pages are in the root.

| Setting     | Description | Type        |
|-------------|-------------|-------------|
| layout | Determines which layout from the `_layouts` directory this page will uses | string | yes|
| permalink | The link users will use to navigate to the page | string |
| body_class | A class applied to the body of the page to help with specific styles to the page. | string |
| title | SEO Title used in the meta tag within the header | string |

### Jekyll front matter
We take advantage of [front matter](https://jekyllrb.com/docs/frontmatter/) for copy editing. Front matter is defined via two lines of three dashes each with YAML inside.
```yaml
---
front-matter: true
---
```
Each page of our site uses front matter to inject copy into our html code. This makes it so you never have to dig through hundreds of lines of html to find the copy you want to change. In addition to copy we also define page variables such as the layout, permalink and seo overrides. Our front matter is typically laid out to follow the natural structure of our page. From top to bottom, the front-matter and actual computed page should line up.

**tl;dr**: front-matter allows us to use the power of YAML in our html files.

### List of pages
| Page                   | permalink                  | files                          | In `_pages`                    |
|------------------------|----------------------------|--------------------------------|--------------------------------|
| Homepage               | `/`                        | `home.md`                   | yes                             |
| Contact                | `/contact`            | `contact.md`                   | yes                             |
| Thank You               | `/thank-you`                | `thank-you.md`           | yes                            |
| Splash              | `/splash`        | `_layouts/splash.html`         | no                            |

### Editing pages
- **Homepage**
Most copy and iconography edits will be made in the `home.md` frontmatter. 
  ```
  hero: 
     mini-title: "Together"
    icon: "fas fa-map"
    title: "We can build a better map"
  ...
  ```
  _Call to actions need to be edited by a designer. Please ask for assistance if you want to edit the copy that appears here._
  
  Several subsections are referencing `yml` files located in the `_data` folder: 
   - `testimonials.yml` (Testimonials section, hidden if no content)
  - `advocacy-groups.yml` (Testimonials section, under Advocacy Groups heading)
  - `community-maps.yml` (Community section, hidden if no content)
   - `articles.yml`(Resources section)
- **Contact**
All changes should be made to the front matter. This page pulls in a contact form. If changes need to be made to this form, please ask for design assistance.
- **Thank you**
All changes should be made to the content below the frontmatter. 

## Data files
### Nav.yml
This includes navigation information that will be used for the primary navigation and footer navigation.

```yaml
- title: "Page Title"
  href: "https://external-link.com/page"
- title: "Welcome"
  href: "/welcome"
  ...
```
### Testimonials.yml
Any testimonials that DistrictBuilder gets can be referenced here. If there are no testimonials, the section displaying them will not appear.

```yaml
- name: "Bruce Gilbert"
  role: "UX Designer"
  quote: "Maecenas sed diam eget risus varius blandit sit amet non magna."
  headshot-url: ".assets/images/bruce_gilbert_headshot.jpg"
  headshot-alt: "Man in blue shirt in front of white wall."
  twitter-handle: "brucegilbert"
  ...
```

### Community-maps.yml
Community maps are features from users of Districtbuilder. These will be manually emailed to `info@districtbuilder.org`. If there are no entries, the section displaying them will not appear.

```yaml
- title: "Descriptive Title for This Map"
  url: "https://app.districtbuilder.com/this-public-map"
  image-url: ".assets/images/square-map-image.jpg"
  user-avatar: ".assets/images/frances_carter_headshot.jpg"
  user-name: "francescarter"
  ...
```

### Articles.yml
Resources or mentions that may be useful to users of the application or folks generally interested in redistricting.

```yaml
 - title: "Article Title"
   blurb: "Nulla vitae elit libero, a pharetra augue."
   image-url: "/articles/this_image.jpg"
   image-alt: "Screenshot of Congressional District Population application."
   article-url: "https://medium.com/this-article"
  ...
```

### Advocacy-group-logos.yml
Advocacy groups that we are working with.

```yaml
 - name: "Organization Name"
  org-url: "https://organization-website.org/"
  logo-url: "/assets/images/oraganization_logo.png"
  ...
```

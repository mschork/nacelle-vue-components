/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
import { storiesOf } from '@storybook/vue'
import { withKnobs, object } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info'
import StoryRouter from 'storybook-vue-router'
import PageContent from '../components/PageContent'
import store from '../store/store'
import { defaultProduct } from '../../config/defaultObjects.js'

const productArray = [
  defaultProduct,
  defaultProduct,
  defaultProduct,
  defaultProduct,
  defaultProduct,
  defaultProduct
]

const defaultObj = {
  contentful: [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "9n7z3zrrmdu4"
          }
        },
        "id": "1kmqDdWDL4rJQ4wIaAFcZm",
        "type": "Entry",
        "createdAt": "2019-08-13T16:55:26.800Z",
        "updatedAt": "2019-08-14T18:02:40.667Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 7,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "heroBanner"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "contentType": "ContentHeroBanner",
        "title": "The future of furniture",
        "handle": "the-future-of-furniture",
        "subtitle": "Testing",
        "content": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Test",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "featuredMedia": {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "9n7z3zrrmdu4"
              }
            },
            "id": "4ykTjR1fM1563524AIRvq2",
            "type": "Asset",
            "createdAt": "2019-08-13T16:56:17.128Z",
            "updatedAt": "2019-08-16T16:31:37.747Z",
            "environment": {
              "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
              }
            },
            "revision": 2,
            "locale": "en-US"
          },
          "fields": {
            "title": "jupiter-bed",
            "file": {
              "url": "//images.ctfassets.net/9n7z3zrrmdu4/4ykTjR1fM1563524AIRvq2/59e172a7ab0783ea77a792dcef6faf39/iStock-476157466.jpg",
              "details": {
                "size": 114815,
                "image": {
                  "width": 1200,
                  "height": 675
                }
              },
              "fileName": "iStock-476157466.jpg",
              "contentType": "image/jpeg"
            }
          }
        },
        "publishDate": "2019-08-15T00:00-07:00",
        "blogHandle": "homepage",
        "alignment": "center",
        "size": "medium",
        "mobileFullHeight": false,
        "mobileBackgroundImage": {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "9n7z3zrrmdu4"
              }
            },
            "id": "2mri2qBxe39mYOENoIIHTx",
            "type": "Asset",
            "createdAt": "2019-08-12T23:34:26.211Z",
            "updatedAt": "2019-08-12T23:34:26.211Z",
            "environment": {
              "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
              }
            },
            "revision": 1,
            "locale": "en-US"
          },
          "fields": {
            "title": "demo-photo1",
            "file": {
              "url": "//images.ctfassets.net/9n7z3zrrmdu4/2mri2qBxe39mYOENoIIHTx/5a453f3dabec858c0090f09b746df307/demo-photo1.jpeg",
              "details": {
                "size": 124110,
                "image": {
                  "width": 1200,
                  "height": 700
                }
              },
              "fileName": "demo-photo1.jpeg",
              "contentType": "image/jpeg"
            }
          }
        },
        "ctaText": "Shop Now",
        "ctaUrl": "/shop"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "9n7z3zrrmdu4"
          }
        },
        "id": "7p0xQtA9OQu1RoUvcsGV02",
        "type": "Entry",
        "createdAt": "2019-08-13T23:10:19.358Z",
        "updatedAt": "2019-08-13T23:10:19.358Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "productGrid"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "contentType": "ContentProductGrid",
        "title": "New Arrivals",
        "handle": "new-arrivals",
        "columns": 4,
        "publishDate": "2019-08-13T00:00-07:00",
        "blogHandle": "homepage"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "9n7z3zrrmdu4"
          }
        },
        "id": "5kbOHEVaQHIbKdiFH7zi2t",
        "type": "Entry",
        "createdAt": "2019-08-13T23:09:19.132Z",
        "updatedAt": "2019-08-13T23:09:19.132Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "sideBySide"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "contentType": "ContentSideBySide",
        "title": "Modern Styles",
        "handle": "modern-styles",
        "content": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Run a manual sweep of anomalous airborne or electromagnetic readings. Radiation levels in our atmosphere have increased by 3,000 percent.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "featuredMedia": {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "9n7z3zrrmdu4"
              }
            },
            "id": "5YSVUJO2PAFG8lvvCOg1Jd",
            "type": "Asset",
            "createdAt": "2019-08-12T23:25:11.194Z",
            "updatedAt": "2019-08-12T23:25:11.194Z",
            "environment": {
              "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
              }
            },
            "revision": 1,
            "locale": "en-US"
          },
          "fields": {
            "title": "demo-photo3",
            "file": {
              "url": "//images.ctfassets.net/9n7z3zrrmdu4/5YSVUJO2PAFG8lvvCOg1Jd/335b6e906be4e5638dc597c41033e4e3/demo-photo3.jpeg",
              "details": {
                "size": 164105,
                "image": {
                  "width": 1200,
                  "height": 700
                }
              },
              "fileName": "demo-photo3.jpeg",
              "contentType": "image/jpeg"
            }
          }
        },
        "publishDate": "2019-08-13T00:00-07:00",
        "blogHandle": "homepage",
        "backgroundColor": "#f2eee8",
        "ctaText": "Shop Now",
        "ctaUrl": "/shop",
        "reverseDesktop": true,
        "reverseMobile": false
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "9n7z3zrrmdu4"
          }
        },
        "id": "3p4NbUVGpD9Daj5RVGcLbB",
        "type": "Entry",
        "createdAt": "2019-08-14T18:16:38.916Z",
        "updatedAt": "2019-08-14T18:21:05.683Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "testimonials"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "contentType": "ContentTestimonials",
        "title": "What People Are Saying",
        "handle": "what-people-are-saying",
        "publishDate": "2019-08-14T00:00-07:00",
        "blogHandle": "homepage",
        "slidesPerView": 2,
        "alignment": "left",
        "slides": [
          {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "9n7z3zrrmdu4"
                }
              },
              "id": "5WvwvfE40tdGfCqVATxW5s",
              "type": "Entry",
              "createdAt": "2019-08-14T18:15:18.932Z",
              "updatedAt": "2019-08-14T18:15:18.932Z",
              "environment": {
                "sys": {
                  "id": "master",
                  "type": "Link",
                  "linkType": "Environment"
                }
              },
              "revision": 1,
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "testimonial"
                }
              },
              "locale": "en-US"
            },
            "fields": {
              "name": "@john-doe",
              "quotation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus a vulputate viverra. Sed vel varius libero, id luctus sem.",
              "featuredMedia": {
                "sys": {
                  "space": {
                    "sys": {
                      "type": "Link",
                      "linkType": "Space",
                      "id": "9n7z3zrrmdu4"
                    }
                  },
                  "id": "1KsG8pQDYVLqlHdVl0XSF8",
                  "type": "Asset",
                  "createdAt": "2019-08-14T18:15:14.068Z",
                  "updatedAt": "2019-08-14T18:15:14.068Z",
                  "environment": {
                    "sys": {
                      "id": "master",
                      "type": "Link",
                      "linkType": "Environment"
                    }
                  },
                  "revision": 1,
                  "locale": "en-US"
                },
                "fields": {
                  "title": "300x300",
                  "file": {
                    "url": "//images.ctfassets.net/9n7z3zrrmdu4/1KsG8pQDYVLqlHdVl0XSF8/05b9cffbeb36a7de9da5d31e0fbb7aea/300x300.png",
                    "details": {
                      "size": 1132,
                      "image": {
                        "width": 300,
                        "height": 300
                      }
                    },
                    "fileName": "300x300.png",
                    "contentType": "image/png"
                  }
                }
              }
            }
          },
          {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "9n7z3zrrmdu4"
                }
              },
              "id": "2lbCIItVi4jNm9GEQlapx1",
              "type": "Entry",
              "createdAt": "2019-08-14T18:16:16.531Z",
              "updatedAt": "2019-08-14T18:16:16.531Z",
              "environment": {
                "sys": {
                  "id": "master",
                  "type": "Link",
                  "linkType": "Environment"
                }
              },
              "revision": 1,
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "testimonial"
                }
              },
              "locale": "en-US"
            },
            "fields": {
              "name": "@the-fourth-user",
              "quotation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus a vulputate viverra. Sed vel varius libero, id luctus sem.",
              "featuredMedia": {
                "sys": {
                  "space": {
                    "sys": {
                      "type": "Link",
                      "linkType": "Space",
                      "id": "9n7z3zrrmdu4"
                    }
                  },
                  "id": "1KsG8pQDYVLqlHdVl0XSF8",
                  "type": "Asset",
                  "createdAt": "2019-08-14T18:15:14.068Z",
                  "updatedAt": "2019-08-14T18:15:14.068Z",
                  "environment": {
                    "sys": {
                      "id": "master",
                      "type": "Link",
                      "linkType": "Environment"
                    }
                  },
                  "revision": 1,
                  "locale": "en-US"
                },
                "fields": {
                  "title": "300x300",
                  "file": {
                    "url": "//images.ctfassets.net/9n7z3zrrmdu4/1KsG8pQDYVLqlHdVl0XSF8/05b9cffbeb36a7de9da5d31e0fbb7aea/300x300.png",
                    "details": {
                      "size": 1132,
                      "image": {
                        "width": 300,
                        "height": 300
                      }
                    },
                    "fileName": "300x300.png",
                    "contentType": "image/png"
                  }
                }
              }
            }
          },
          {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "9n7z3zrrmdu4"
                }
              },
              "id": "6A0xqQ98vta3bbXwr4nz6P",
              "type": "Entry",
              "createdAt": "2019-08-14T18:16:01.022Z",
              "updatedAt": "2019-08-14T18:16:01.022Z",
              "environment": {
                "sys": {
                  "id": "master",
                  "type": "Link",
                  "linkType": "Environment"
                }
              },
              "revision": 1,
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "testimonial"
                }
              },
              "locale": "en-US"
            },
            "fields": {
              "name": "@third-user-name",
              "quotation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus a vulputate viverra. Sed vel varius libero, id luctus sem.",
              "featuredMedia": {
                "sys": {
                  "space": {
                    "sys": {
                      "type": "Link",
                      "linkType": "Space",
                      "id": "9n7z3zrrmdu4"
                    }
                  },
                  "id": "1KsG8pQDYVLqlHdVl0XSF8",
                  "type": "Asset",
                  "createdAt": "2019-08-14T18:15:14.068Z",
                  "updatedAt": "2019-08-14T18:15:14.068Z",
                  "environment": {
                    "sys": {
                      "id": "master",
                      "type": "Link",
                      "linkType": "Environment"
                    }
                  },
                  "revision": 1,
                  "locale": "en-US"
                },
                "fields": {
                  "title": "300x300",
                  "file": {
                    "url": "//images.ctfassets.net/9n7z3zrrmdu4/1KsG8pQDYVLqlHdVl0XSF8/05b9cffbeb36a7de9da5d31e0fbb7aea/300x300.png",
                    "details": {
                      "size": 1132,
                      "image": {
                        "width": 300,
                        "height": 300
                      }
                    },
                    "fileName": "300x300.png",
                    "contentType": "image/png"
                  }
                }
              }
            }
          },
          {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "9n7z3zrrmdu4"
                }
              },
              "id": "4CwmZ0Yf4cDszz7kfAt739",
              "type": "Entry",
              "createdAt": "2019-08-14T18:15:41.499Z",
              "updatedAt": "2019-08-14T18:15:41.499Z",
              "environment": {
                "sys": {
                  "id": "master",
                  "type": "Link",
                  "linkType": "Environment"
                }
              },
              "revision": 1,
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "testimonial"
                }
              },
              "locale": "en-US"
            },
            "fields": {
              "name": "@user-two",
              "quotation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus a vulputate viverra. Sed vel varius libero, id luctus sem.",
              "featuredMedia": {
                "sys": {
                  "space": {
                    "sys": {
                      "type": "Link",
                      "linkType": "Space",
                      "id": "9n7z3zrrmdu4"
                    }
                  },
                  "id": "1KsG8pQDYVLqlHdVl0XSF8",
                  "type": "Asset",
                  "createdAt": "2019-08-14T18:15:14.068Z",
                  "updatedAt": "2019-08-14T18:15:14.068Z",
                  "environment": {
                    "sys": {
                      "id": "master",
                      "type": "Link",
                      "linkType": "Environment"
                    }
                  },
                  "revision": 1,
                  "locale": "en-US"
                },
                "fields": {
                  "title": "300x300",
                  "file": {
                    "url": "//images.ctfassets.net/9n7z3zrrmdu4/1KsG8pQDYVLqlHdVl0XSF8/05b9cffbeb36a7de9da5d31e0fbb7aea/300x300.png",
                    "details": {
                      "size": 1132,
                      "image": {
                        "width": 300,
                        "height": 300
                      }
                    },
                    "fileName": "300x300.png",
                    "contentType": "image/png"
                  }
                }
              }
            }
          }
        ]
      }
    }
  ],
  shopify: [
    {
      "node": {
        "title": "The future of furniture",
        "handle": "hero-banner",
        "contentHtml": "",
        "image": {
          "id": "Z2lkOi8vc2hvcGlmeS9BcnRpY2xlSW1hZ2UvNjEzMDAwODEwMA==",
          "originalSrc": "https://cdn.shopify.com/s/files/1/0094/4098/5124/articles/iStock-476157466.jpg?v=1562792247"
        },
        "tags": [
          "field::backgroundAlt::Living room with Starship furniture",
          "field::backgroundAltTag::Living room with Starship furniture",
          "field::contentType::ContentHeroBanner",
          "field::ctaText::Shop Now",
          "field::ctaUrl::/shop"
        ]
      }
    },
    {
      "node": {
        "title": "New Arrivals",
        "handle": "product-grid",
        "contentHtml": "",
        "image": null,
        "tags": [
          "field::contentType::ContentProductGrid"
        ]
      }
    },
    {
      "node": {
        "title": "Living Room Decor",
        "handle": "side-by-side",
        "contentHtml": "Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawlways.",
        "image": {
          "id": "Z2lkOi8vc2hvcGlmeS9BcnRpY2xlSW1hZ2UvNjExNTA5ODY2MA==",
          "originalSrc": "https://cdn.shopify.com/s/files/1/0094/4098/5124/articles/starship1.jpg?v=1562695773"
        },
        "tags": [
          "field::backgroundColor::#f2eee8",
          "field::contentType::ContentSideBySide",
          "field::ctaText::Shop Now",
          "field::ctaUrl::/shop"
        ]
      }
    },
    {
      "node": {
        "title": "Modern Styles",
        "handle": "side-by-side-2",
        "contentHtml": "Run a manual sweep of anomalous airborne or electromagnetic readings. Radiation levels in our atmosphere have increased by 3,000 percent.",
        "image": {
          "id": "Z2lkOi8vc2hvcGlmeS9BcnRpY2xlSW1hZ2UvNjExNTEzMTQyOA==",
          "originalSrc": "https://cdn.shopify.com/s/files/1/0094/4098/5124/articles/starship2.jpg?v=1562696241"
        },
        "tags": [
          "field::backgroundColor::#f2eee8",
          "field::contentType::ContentSideBySide",
          "field::ctaText::Shop Now",
          "field::ctaUrl::/shop",
          "field::reverseDesktop::true"
        ]
      }
    },
    {
      "node": {
        "title": "Testimonials",
        "handle": "testimonials",
        "contentHtml": "Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile.",
        "image": null,
        "tags": [
          "field::contentType::ContentTestimonial"
        ]
      }
    }
  ]
}

storiesOf('Components | Content / Page Content', module)
  .addDecorator(StoryRouter())
  .add(
    'Contentful Content',
    () => ({
      components: { PageContent },
      store,
      data() {
        return {
          page: {
            source: 'contentful',
            sections: defaultObj.contentful,
          },
          products: productArray
        }
      },
      template: `
        <page-content :page="page" :products="products"/>
      `
    })
  )

storiesOf('Components | Content / Page Content', module)
  .addDecorator(withInfo)
  .addDecorator(StoryRouter())
  .add(
    'Custom Page Content Mapper',
    () => ({
      components: { PageContent },
      store,
      data() {
        return {
          page: {
            source: 'contentful',
            sections: defaultObj.contentful
          },
          products: productArray
        }
      },
      computed: {
        customMappedContent() {
          return this.page.sections.map(section => {
            return section.fields.handle
          })
        }
      },
      template: `
        <page-content :page="page" :products="products">
          <template v-slot="{ page }">
            <div>
              <h3>Custom Content Mapper</h3>
              <ul>
                <li v-for="section in customMappedContent" :key="section">
                  {{ section }}
                </li>
              </ul>
            </div>
          </template>
        </page-content>
      `
    }),
    {
      info: {
        summary: `By default page content will look at the source of the page and use either a Shopify or Contentful data mapper. The mapper and mapper function can be customized.`
      }
    }
  )

  storiesOf('Components | Content / Page Content', module)
  .addDecorator(withInfo)
  .addDecorator(StoryRouter())
  .add(
    'Custom Section Components',
    () => ({
      components: { PageContent },
      store,
      data() {
        return {
          page: {
            source: 'contentful',
            sections: defaultObj.contentful
          },
          products: productArray
        }
      },
      computed: {
        customMappedContent() {
          return this.page.content.map(section => {
            return section.id
          })
        }
      },
      template: `
        <page-content :page="page" :products="products">
          <template v-slot:section="{ section }">
            <div style="padding: 1em">
              {{ section.props.title }}
            </div>
          </template>
        </page-content>
      `
    }),
    {
      info: {
        summary: ``
      }
    }
  )

  storiesOf('Components | Content / Page Content', module)
  .addDecorator(withInfo)
  .addDecorator(StoryRouter())
  .add(
    'Shopify content',
    () => ({
      components: { PageContent },
      store,
      data() {
        return {
          page: {
            source: 'shopify',
            sections: defaultObj.shopify
          },
          products: productArray
        }
      },
      computed: {
        customMappedContent() {
          return this.page.content.map(section => {
            return section.id
          })
        }
      },
      template: `
        <page-content :page="page" :products="products"/>
      `
    }),
    {
      info: {
        summary: ``
      }
    }
  )
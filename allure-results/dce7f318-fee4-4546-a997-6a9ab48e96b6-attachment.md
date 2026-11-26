# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.spec.js >> Globalsqa
- Location: tests\global.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//iframe[@class=\' lazyloaded\']').contentFrame().getByText('Sortable')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e7]:
      - generic:
        - generic:
          - generic:
            - button [ref=e8] [cursor=pointer]
            - textbox "Search..." [ref=e9]
        - link "pinterest" [ref=e10]:
          - /url: https://in.pinterest.com/globalsqa/
        - link "twitter" [ref=e11]:
          - /url: https://twitter.com/Global_SQA
        - link "linkedin" [ref=e12]:
          - /url: https://www.linkedin.com/company/globalsqa
        - link "google" [ref=e13]:
          - /url: https://plus.google.com/103761557396023531439/posts
        - link "facebook" [ref=e14]:
          - /url: https://facebook.com/globalsqa
        - generic [ref=e15]: contact@globalsqa.com
    - generic [ref=e19]:
      - link [ref=e22]:
        - /url: https://www.globalsqa.com/
        - img "GlobalSQA" [ref=e23]
      - generic [ref=e24]:
        - list:
          - listitem [ref=e25]:
            - link "About" [ref=e26]:
              - /url: https://www.globalsqa.com/about/
          - listitem [ref=e27]:
            - link "CheatSheets" [ref=e28]:
              - /url: https://www.globalsqa.com/cheatsheets/
          - listitem [ref=e29]:
            - link "Free Ebooks" [ref=e30]:
              - /url: https://www.globalsqa.com/free-ebooks/
          - listitem [ref=e32]:
            - link "Tester’s Hub" [ref=e33]:
              - /url: https://www.globalsqa.com/testers-hub/
            - text:  
          - listitem [ref=e35]:
            - link "Contact Us" [ref=e36]:
              - /url: https://www.globalsqa.com/contact-us/
    - text:    
  - generic [ref=e37]:
    - generic [ref=e41]:
      - generic [ref=e42]:
        - link "Home" [ref=e43]:
          - /url: https://www.globalsqa.com/
        - link "Demo Testing Site" [ref=e45]:
          - /url: https://www.globalsqa.com/demo-site/
        - link "Frames And Windows" [ref=e47]:
          - /url: https://www.globalsqa.com/demo-site/frames-and-windows/
      - heading "Frames And Windows" [level=1] [ref=e50]
    - generic [ref=e53]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - heading "Interaction" [level=4] [ref=e56]
          - list [ref=e58]:
            - listitem [ref=e59]:
              - link "Sortable" [ref=e60]:
                - /url: https://www.globalsqa.com/demo-site/sorting/
            - listitem [ref=e62]:
              - link "Drag And Drop" [ref=e63]:
                - /url: https://www.globalsqa.com/demo-site/draganddrop/
            - listitem [ref=e65]:
              - link "Select Elements" [ref=e66]:
                - /url: https://www.globalsqa.com/demo-site/select-elements/
            - listitem [ref=e68]:
              - link "Draggable Boxes" [ref=e69]:
                - /url: https://www.globalsqa.com/demo-site/draggableboxes/
            - listitem [ref=e71]:
              - link "DropDown Menu" [ref=e72]:
                - /url: https://www.globalsqa.com/demo-site/select-dropdown-menu/
        - generic [ref=e74]:
          - heading "Widgets" [level=4] [ref=e75]
          - list [ref=e77]:
            - listitem [ref=e78]:
              - link "Tooltip" [ref=e79]:
                - /url: https://www.globalsqa.com/demo-site/tooltip/
            - listitem [ref=e81]:
              - link "Sliders" [ref=e82]:
                - /url: https://www.globalsqa.com/demo-site/sliders/
            - listitem [ref=e84]:
              - link "Spinner" [ref=e85]:
                - /url: https://www.globalsqa.com/demo-site/spinner/
            - listitem [ref=e87]:
              - link "DatePicker" [ref=e88]:
                - /url: https://www.globalsqa.com/demo-site/datepicker/
            - listitem [ref=e90]:
              - link "Progress Bar" [ref=e91]:
                - /url: https://www.globalsqa.com/demo-site/progress-bar/
            - listitem [ref=e93]:
              - link "Dialog Boxes" [ref=e94]:
                - /url: https://www.globalsqa.com/demo-site/dialog-boxes/
            - listitem [ref=e96]:
              - link "Auto Complete" [ref=e97]:
                - /url: https://www.globalsqa.com/demo-site/auto-complete/
            - listitem [ref=e99]:
              - link "Accordion And Tabs" [ref=e100]:
                - /url: https://www.globalsqa.com/demo-site/accordion-and-tabs/
        - generic [ref=e102]:
          - generic:
            - insertion:
              - iframe [ref=e104]
          - heading "Miscellaneous" [level=4] [ref=e105]
          - list [ref=e107]:
            - listitem [ref=e108]:
              - link "AlertBox" [ref=e109]:
                - /url: https://www.globalsqa.com/demo-site/alertbox/
            - listitem [ref=e111]:
              - link "Toolbar" [ref=e112]:
                - /url: https://www.globalsqa.com/demo-site/toolbar/
            - listitem [ref=e114]:
              - link "Sample Page Test" [ref=e115]:
                - /url: https://www.globalsqa.com/samplepagetest/
            - listitem [ref=e117]:
              - link "Frames And Windows" [ref=e118]:
                - /url: https://www.globalsqa.com/demo-site/frames-and-windows/
            - listitem [ref=e120]:
              - link "AngularJS Protractor Practice Site" [ref=e121]:
                - /url: https://www.globalsqa.com/angularjs-protractor-practice-site/
        - insertion [ref=e125]:
          - generic [ref=e128]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e130]: Discover more
            - link "Try Cloud Tools" [ref=e131] [cursor=pointer]
            - link "Try Dev Tools" [ref=e136] [cursor=pointer]
            - link "Learn to Code" [ref=e141] [cursor=pointer]
            - link "Compare Windows" [ref=e146] [cursor=pointer]
            - link "Window" [ref=e151] [cursor=pointer]
            - link "Windows" [ref=e156] [cursor=pointer]
            - link "window" [ref=e161] [cursor=pointer]
            - link "Upgrade Tech" [ref=e166] [cursor=pointer]
        - generic [ref=e172]:
          - insertion:
            - iframe [ref=e174]
      - generic [ref=e175]:
        - generic [ref=e176]:
          - list [ref=e177]:
            - tab "Open New Tab" [ref=e178] [cursor=pointer]
            - tab "Open New Window" [ref=e179] [cursor=pointer]
            - tab "iFrame" [ref=e180] [cursor=pointer]
          - generic [ref=e182]:
            - generic [ref=e183]:
              - generic [ref=e184] [cursor=pointer]
              - emphasis [ref=e185]:
                - strong [ref=e186]:
                  - text: Below is an iFrame. If you want to perform any operation in this
                  - link "window" [ref=e187] [cursor=pointer]:
                    - /url: "#"
                  - text: ", you will need to enter in this iframe."
            - paragraph [ref=e190]:
              - iframe [ref=e191]:
                - generic [ref=f1e1]:
                  - generic [ref=f1e2]:
                    - banner [ref=f1e3]:
                      - generic [ref=f1e7]:
                        - generic:
                          - generic:
                            - generic:
                              - button [ref=f1e8] [cursor=pointer]
                              - textbox "Search..." [ref=f1e9]
                          - link "pinterest" [ref=f1e10]:
                            - /url: https://in.pinterest.com/globalsqa/
                          - link "twitter" [ref=f1e11]:
                            - /url: https://twitter.com/Global_SQA
                          - link "linkedin" [ref=f1e12]:
                            - /url: https://www.linkedin.com/company/globalsqa
                          - link "google" [ref=f1e13]:
                            - /url: https://plus.google.com/103761557396023531439/posts
                          - link "facebook" [ref=f1e14]:
                            - /url: https://facebook.com/globalsqa
                          - generic [ref=f1e15]: contact@globalsqa.com
                      - generic [ref=f1e19]:
                        - link [ref=f1e22]:
                          - /url: https://www.globalsqa.com/
                          - img "GlobalSQA" [ref=f1e23]
                        - generic [ref=f1e24] [cursor=pointer]
                        - generic:  
                      - text:    
                    - generic [ref=f1e25]:
                      - generic [ref=f1e29]:
                        - generic [ref=f1e30]:
                          - link "Home" [ref=f1e31]:
                            - /url: https://www.globalsqa.com/
                          - link "About" [ref=f1e33]:
                            - /url: https://www.globalsqa.com/about/
                        - heading "About" [level=1] [ref=f1e36]
                      - generic [ref=f1e41]:
                        - generic [ref=f1e43]:
                          - generic [ref=f1e44]:
                            - heading "About Me" [level=2] [ref=f1e54]
                            - heading "My Story" [level=2] [ref=f1e57]
                            - heading "The best way to predict the future is to invent it - Alan Kay" [level=2] [ref=f1e60]
                            - generic [ref=f1e62]:
                              - paragraph [ref=f1e63]: This quote perfectly encapsulates my approach to technology. I’m Raghav Arora, and I’ve been a passionate tech advocate since the dawn of my career. While I’ve donned many hats – developer, project manager, automation whiz – my core interests have always revolved around automation and the ever-evolving world of AI.
                              - paragraph [ref=f1e64]: In 2014, this passion fueled the creation of GlobalSQA, a one-stop shop for consulting and training needs. But my drive to innovate extends far beyond the walls of GlobalSQA.
                          - generic [ref=f1e65]:
                            - img "Raghav Arora" [ref=f1e68]
                            - heading "|" [level=3] [ref=f1e71]
                        - generic [ref=f1e74]:
                          - heading "Building to Make a Difference" [level=2] [ref=f1e78]
                          - generic [ref=f1e79]:
                            - generic [ref=f1e82]:
                              - paragraph [ref=f1e83]: "I’m a firm believer in the power of technology to solve real-world problems. This philosophy has led me to:"
                              - list [ref=f1e84]:
                                - listitem [level=1] [ref=f1e85]: Author several books, sharing my knowledge with aspiring automation experts. They are still available on Amazon for free but haven’t been updated from quite a while. So, don’t expect content to be as per current market
                                - listitem [level=1] [ref=f1e86]:
                                  - generic [ref=f1e87]:
                                    - text: Developed a
                                    - link "website" [ref=f1e88]:
                                      - /url: https://web.archive.org/web/20201230003301/https://asxalert.com/
                                    - text: i.e. asxalert.com dedicated to keep investors informed about any announcement by a company (listed on Australian Stock Exchange). This website gained 3000 free subscribers and approx. 350 paid subscriber. However, due to legal notice from ASX on licensing, I had to shut down the website.
                                - listitem [level=1] [ref=f1e89]:
                                  - generic [ref=f1e90]:
                                    - text: Developed “
                                    - link "CoinControl" [ref=f1e91]:
                                      - /url: https://www.amazon.com/Coin-Control-Bitcoin-Coins-Price/dp/B079GM6W3L/ref=cm_cr_arp_d_product_top?ie=UTF8
                                    - text: ",” an Android app and “"
                                    - link "Best Wishes" [ref=f1e92]:
                                      - /url: https://www.amazon.com/GlobalSQA-Best-Wishes/dp/B074CKKMWR
                                    - text: ",” an Alexa skill as my side project to gain programming knowledge and stay up to date with the market."
                                - listitem [level=1] [ref=f1e93]: Developed lot of custom web scrapers, crawlers and bots for SMEs / Startups, streamlining data collection.
                                - listitem [level=1] [ref=f1e94]: Delivered corporate training to over 50 companies, impacting over 5,000 students online on various programming and automation topics/tools.
                            - heading "The J |" [level=3] [ref=f1e97]:
                              - text: The
                              - generic [ref=f1e98]:
                                - generic [ref=f1e99]: J
                                - generic [ref=f1e101]: "|"
                            - generic [ref=f1e103]:
                              - paragraph [ref=f1e104]: My biggest thrill lies in creating useful applications that make a positive impact. This drive to build a better future fuels my constant learning and exploration of new technologies. Let’s connect and discuss how automation can revolutionize your world!
                              - paragraph [ref=f1e105]: My working modes are high-level and hands-on, combined with an agile mindset to deliver high-quality, state-of-the-art solutions.
                            - generic [ref=f1e108]:
                              - link "Linkedin" [ref=f1e110] [cursor=pointer]:
                                - /url: https://linkedin.com/in/aroraraghav
                              - link "Twitter" [ref=f1e115] [cursor=pointer]:
                                - /url: https://twitter.com/global_sqa
                        - generic [ref=f1e120]:
                          - generic [ref=f1e125]:
                            - article [ref=f1e126]:
                              - generic [ref=f1e128]:
                                - img "IMG_20190322_155057-min" [ref=f1e130]
                                - generic [ref=f1e131]:
                                  - generic [ref=f1e133] [cursor=pointer]
                                  - generic [ref=f1e134] [cursor=pointer]
                                  - generic [ref=f1e135]: 
                            - article [ref=f1e143]:
                              - generic [ref=f1e145]:
                                - img "WhatsApp Image 2024-05-12 at 8.40.52 PM" [ref=f1e147]
                                - generic [ref=f1e148]:
                                  - generic [ref=f1e150] [cursor=pointer]
                                  - generic [ref=f1e151] [cursor=pointer]
                                  - generic [ref=f1e152]: 
                            - article [ref=f1e160]:
                              - generic [ref=f1e162]:
                                - img "IMG_3741-min" [ref=f1e164]
                                - generic [ref=f1e165]:
                                  - generic [ref=f1e167] [cursor=pointer]
                                  - generic [ref=f1e168] [cursor=pointer]
                                  - generic [ref=f1e174]:
                                    - generic [ref=f1e175] [cursor=pointer]: 
                                    - generic [ref=f1e177] [cursor=pointer]
                            - article [ref=f1e178]:
                              - generic [ref=f1e180]:
                                - img "IMG_20190125_132740-min" [ref=f1e182]
                                - generic [ref=f1e183]:
                                  - generic [ref=f1e185] [cursor=pointer]
                                  - generic [ref=f1e186] [cursor=pointer]
                                  - generic [ref=f1e192]:
                                    - generic [ref=f1e193] [cursor=pointer]: 
                                    - generic [ref=f1e195] [cursor=pointer]
                            - article [ref=f1e196]:
                              - generic [ref=f1e198]:
                                - img "IMG_20170929_171359-min" [ref=f1e200]
                                - generic [ref=f1e201]:
                                  - generic [ref=f1e203] [cursor=pointer]
                                  - generic [ref=f1e204] [cursor=pointer]
                                  - generic [ref=f1e210]:
                                    - generic [ref=f1e211] [cursor=pointer]: 
                                    - generic [ref=f1e213] [cursor=pointer]
                            - article [ref=f1e214]:
                              - generic [ref=f1e216]:
                                - img "IMG_20190301_164727-min" [ref=f1e218]
                                - generic [ref=f1e219]:
                                  - generic [ref=f1e221] [cursor=pointer]
                                  - generic [ref=f1e222] [cursor=pointer]
                                  - generic [ref=f1e228]:
                                    - generic [ref=f1e229] [cursor=pointer]: 
                                    - generic [ref=f1e231] [cursor=pointer]
                            - article [ref=f1e232]:
                              - generic [ref=f1e234]:
                                - img "IMG_20190321_153133-min" [ref=f1e236]
                                - generic [ref=f1e237]:
                                  - generic [ref=f1e239] [cursor=pointer]
                                  - generic [ref=f1e245]:
                                    - generic [ref=f1e246] [cursor=pointer]: 
                                    - generic [ref=f1e248] [cursor=pointer]
                            - article [ref=f1e249]:
                              - generic [ref=f1e251]:
                                - img "IMG_20190226_115438-min" [ref=f1e253]
                                - generic [ref=f1e254]:
                                  - generic [ref=f1e256] [cursor=pointer]
                                  - generic [ref=f1e262]:
                                    - generic [ref=f1e263] [cursor=pointer]: 
                                    - generic [ref=f1e265] [cursor=pointer]
                            - article [ref=f1e266]:
                              - generic [ref=f1e268]:
                                - img "WhatsApp Image 2024-05-12 at 8.40.51 PM" [ref=f1e270]
                                - generic [ref=f1e271]:
                                  - generic [ref=f1e273] [cursor=pointer]
                                  - generic [ref=f1e279]:
                                    - generic [ref=f1e280] [cursor=pointer]: 
                                    - generic [ref=f1e282] [cursor=pointer]
                          - generic [ref=f1e284]:
                            - heading "Corporate Trainings" [level=2] [ref=f1e287]
                            - paragraph [ref=f1e290]: A few images showcasing corporate training delivered across different organizations
                    - generic [ref=f1e291]:
                      - generic [ref=f1e293]:
                        - generic [ref=f1e294]:
                          - heading "Footer Widget Area 1" [level=3] [ref=f1e295]
                          - paragraph [ref=f1e296]:
                            - link "Assign a widget to this area now." [ref=f1e297]:
                              - /url: https://www.globalsqa.com/wp-admin/widgets.php
                        - generic [ref=f1e298]:
                          - heading "Footer Widget Area 2" [level=3] [ref=f1e299]
                          - paragraph [ref=f1e300]:
                            - link "Assign a widget to this area now." [ref=f1e301]:
                              - /url: https://www.globalsqa.com/wp-admin/widgets.php
                        - generic [ref=f1e302]:
                          - heading "Footer Widget Area 3" [level=3] [ref=f1e303]
                          - paragraph [ref=f1e304]:
                            - link "Assign a widget to this area now." [ref=f1e305]:
                              - /url: https://www.globalsqa.com/wp-admin/widgets.php
                        - generic [ref=f1e306]:
                          - heading "Footer Widget Area 4" [level=3] [ref=f1e307]
                          - paragraph [ref=f1e308]:
                            - link "Assign a widget to this area now." [ref=f1e309]:
                              - /url: https://www.globalsqa.com/wp-admin/widgets.php
                      - generic [ref=f1e314]:
                        - link "pinterest" [ref=f1e315]:
                          - /url: https://in.pinterest.com/globalsqa/
                        - link "twitter" [ref=f1e316]:
                          - /url: https://twitter.com/Global_SQA
                        - link "linkedin" [ref=f1e317]:
                          - /url: https://www.linkedin.com/company/globalsqa
                        - link "google" [ref=f1e318]:
                          - /url: https://plus.google.com/103761557396023531439/posts
                        - link "facebook" [ref=f1e319]:
                          - /url: https://facebook.com/globalsqa
                        - generic [ref=f1e320]:
                          - text: "Website Designed & Developed by :"
                          - link "GlobalSQA" [ref=f1e321]:
                            - /url: https://www.globalsqa.com
                  - generic [ref=f1e322]: tablet
                  - insertion [ref=f1e326]:
                    - iframe [ref=f1e328]:
                      - generic [ref=f29e1]:
                        - generic [ref=f29e6]:
                          - generic [ref=f29e7]:
                            - generic "Coursera" [ref=f29e9]:
                              - link "Enroll for Free" [ref=f29e10] [cursor=pointer]:
                                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C_YPV08EHa-W_HLKzz7sPwLfaqALp-t_ghgGe8YWY9RXi-aiJhyoQASCn5pMjYOWS6IPYDqABpr-pugPIAQGpAnQpoLxhSEc-qAMByAPLBKoE_wFP0PlP6DwMwvk7uJ_BuvuxOUXloZL1GyNrHEZA6vtzN5gugAJKEuh6J1smb_GnUlxPTXys72DRfUUZuKZsXcgCAo7sech4QIEHHX4l_CljVE5B000LsOeXccwe8wXv8MqNK0z-O9vBcRywMQEuu6hAbIfRFxkBud_q1XJEg2ZDKPJoFWqHO8nEJphj_ZGf6t8i0Uxwre28HjLOIpIoQgT5S3iQFSfD7ZK5g3f_3Ovf6j6unTjh3krepVEGtiY7QOxsYTzN_2ChtWJMrauDtUwZ7ChLNPaPEcQF3k7hmfXeZP3FSvo3hhv5ClJmSvJbfT6Sx39lV3xLfhZG9ederXfABKKT9dLlBYgFnNO41ViAB9Hd0vYCqAep67ECqAenzLECqAfi2LECqAeo7bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAevvrECqAef4bECqAem67ECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljoxrPq8aSYA2ABsQkzV3P1itudC4AKAZgLAcgLAaIMQSoGCgT28rECYhcKFW9yZy5jb3Vyc2VyYS5jb3Vyc2VyYWoWChRvcmcuY291cnNlcmEuYW5kcm9pZHgBiAEBkAEBqg0CSU7IDQHqDRMIx_iz6vGkmAMVstlzAR3AmxYliA4JsA7Ijob-GNgTC4gUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKAVBgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIpfWz6vGkmAMVstlzAR3AmxYlEAEYASAAEgJ8DfD_BwE&num=1&cid=CAQSsQIAogo4db45QJTK9odI_0pXTmgIsO8ZVWoJEyGtUJkrz40yd4GPnqX1xrqchssRZMctu-6akc6MU4gO75L2h1wimwUkDaGmX-RvbjwsD781FwGdaaarOCnXRJC-K5RyoRo_JqxwZuqRKrcagFIWhFbN7TyKqGipG_5ugkkU2qa-1J9UzsOBGEBxm-faSIfhnNEKQjOswFGp9h0WB5OlCPeaWehuUAWxG3MLjKK9NRIMG33HK2-B0vKyhHSQuD1xcJzTe8tKeGo4_WsYjLvgHXL-ff6NRtPNHRKwq_pN4MakwAtI-VV3FLgjX9tmuqtz2lX8jcrfyrrDgobOgehERHcWNcOG6tw-GtsdAt2_6rka-gNIaBsRkQGffyR4Akbm_DrvSjJk4FREojgj_4oeVGT44BgB&sig=AOD64_1rSWDGmBotT9xsTkm3sLaDfbEMXw&rf=1&nb=0&adurl=https://www.coursera.org/professional-certificates/google-advanced-data-analytics%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_x_google_ftcof_multi_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-04_desktop%26campaignid%3D23801460367%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6706792264%26targetid%3D%26extensionid%3D%26placement%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D23801506204
                            - generic [ref=f29e11]:
                              - link "Prepare for high-earning advanced data jobs with new Google Certificates" [ref=f29e13] [cursor=pointer]:
                                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C_YPV08EHa-W_HLKzz7sPwLfaqALp-t_ghgGe8YWY9RXi-aiJhyoQASCn5pMjYOWS6IPYDqABpr-pugPIAQGpAnQpoLxhSEc-qAMByAPLBKoE_wFP0PlP6DwMwvk7uJ_BuvuxOUXloZL1GyNrHEZA6vtzN5gugAJKEuh6J1smb_GnUlxPTXys72DRfUUZuKZsXcgCAo7sech4QIEHHX4l_CljVE5B000LsOeXccwe8wXv8MqNK0z-O9vBcRywMQEuu6hAbIfRFxkBud_q1XJEg2ZDKPJoFWqHO8nEJphj_ZGf6t8i0Uxwre28HjLOIpIoQgT5S3iQFSfD7ZK5g3f_3Ovf6j6unTjh3krepVEGtiY7QOxsYTzN_2ChtWJMrauDtUwZ7ChLNPaPEcQF3k7hmfXeZP3FSvo3hhv5ClJmSvJbfT6Sx39lV3xLfhZG9ederXfABKKT9dLlBYgFnNO41ViAB9Hd0vYCqAep67ECqAenzLECqAfi2LECqAeo7bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAevvrECqAef4bECqAem67ECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljoxrPq8aSYA2ABsQkzV3P1itudC4AKAZgLAcgLAaIMQSoGCgT28rECYhcKFW9yZy5jb3Vyc2VyYS5jb3Vyc2VyYWoWChRvcmcuY291cnNlcmEuYW5kcm9pZHgBiAEBkAEBqg0CSU7IDQHqDRMIx_iz6vGkmAMVstlzAR3AmxYliA4JsA7Ijob-GNgTC4gUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKAVBgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIpfWz6vGkmAMVstlzAR3AmxYlEAEYASAAEgJ8DfD_BwE&num=1&cid=CAQSsQIAogo4db45QJTK9odI_0pXTmgIsO8ZVWoJEyGtUJkrz40yd4GPnqX1xrqchssRZMctu-6akc6MU4gO75L2h1wimwUkDaGmX-RvbjwsD781FwGdaaarOCnXRJC-K5RyoRo_JqxwZuqRKrcagFIWhFbN7TyKqGipG_5ugkkU2qa-1J9UzsOBGEBxm-faSIfhnNEKQjOswFGp9h0WB5OlCPeaWehuUAWxG3MLjKK9NRIMG33HK2-B0vKyhHSQuD1xcJzTe8tKeGo4_WsYjLvgHXL-ff6NRtPNHRKwq_pN4MakwAtI-VV3FLgjX9tmuqtz2lX8jcrfyrrDgobOgehERHcWNcOG6tw-GtsdAt2_6rka-gNIaBsRkQGffyR4Akbm_DrvSjJk4FREojgj_4oeVGT44BgB&sig=AOD64_1rSWDGmBotT9xsTkm3sLaDfbEMXw&rf=1&nb=7&adurl=https://www.coursera.org/professional-certificates/google-advanced-data-analytics%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_x_google_ftcof_multi_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-04_desktop%26campaignid%3D23801460367%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6706792264%26targetid%3D%26extensionid%3D%26placement%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D23801506204
                              - link [ref=f29e14] [cursor=pointer]:
                                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C_YPV08EHa-W_HLKzz7sPwLfaqALp-t_ghgGe8YWY9RXi-aiJhyoQASCn5pMjYOWS6IPYDqABpr-pugPIAQGpAnQpoLxhSEc-qAMByAPLBKoE_wFP0PlP6DwMwvk7uJ_BuvuxOUXloZL1GyNrHEZA6vtzN5gugAJKEuh6J1smb_GnUlxPTXys72DRfUUZuKZsXcgCAo7sech4QIEHHX4l_CljVE5B000LsOeXccwe8wXv8MqNK0z-O9vBcRywMQEuu6hAbIfRFxkBud_q1XJEg2ZDKPJoFWqHO8nEJphj_ZGf6t8i0Uxwre28HjLOIpIoQgT5S3iQFSfD7ZK5g3f_3Ovf6j6unTjh3krepVEGtiY7QOxsYTzN_2ChtWJMrauDtUwZ7ChLNPaPEcQF3k7hmfXeZP3FSvo3hhv5ClJmSvJbfT6Sx39lV3xLfhZG9ederXfABKKT9dLlBYgFnNO41ViAB9Hd0vYCqAep67ECqAenzLECqAfi2LECqAeo7bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAevvrECqAef4bECqAem67ECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljoxrPq8aSYA2ABsQkzV3P1itudC4AKAZgLAcgLAaIMQSoGCgT28rECYhcKFW9yZy5jb3Vyc2VyYS5jb3Vyc2VyYWoWChRvcmcuY291cnNlcmEuYW5kcm9pZHgBiAEBkAEBqg0CSU7IDQHqDRMIx_iz6vGkmAMVstlzAR3AmxYliA4JsA7Ijob-GNgTC4gUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKAVBgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIpfWz6vGkmAMVstlzAR3AmxYlEAEYASAAEgJ8DfD_BwE&num=1&cid=CAQSsQIAogo4db45QJTK9odI_0pXTmgIsO8ZVWoJEyGtUJkrz40yd4GPnqX1xrqchssRZMctu-6akc6MU4gO75L2h1wimwUkDaGmX-RvbjwsD781FwGdaaarOCnXRJC-K5RyoRo_JqxwZuqRKrcagFIWhFbN7TyKqGipG_5ugkkU2qa-1J9UzsOBGEBxm-faSIfhnNEKQjOswFGp9h0WB5OlCPeaWehuUAWxG3MLjKK9NRIMG33HK2-B0vKyhHSQuD1xcJzTe8tKeGo4_WsYjLvgHXL-ff6NRtPNHRKwq_pN4MakwAtI-VV3FLgjX9tmuqtz2lX8jcrfyrrDgobOgehERHcWNcOG6tw-GtsdAt2_6rka-gNIaBsRkQGffyR4Akbm_DrvSjJk4FREojgj_4oeVGT44BgB&sig=AOD64_1rSWDGmBotT9xsTkm3sLaDfbEMXw&rf=1&nb=8&adurl=https://www.coursera.org/professional-certificates/google-advanced-data-analytics%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_x_google_ftcof_multi_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-04_desktop%26campaignid%3D23801460367%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6706792264%26targetid%3D%26extensionid%3D%26placement%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D23801506204
                          - generic "Coursera" [ref=f29e17]:
                            - link "Coursera" [ref=f29e18] [cursor=pointer]:
                              - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C_YPV08EHa-W_HLKzz7sPwLfaqALp-t_ghgGe8YWY9RXi-aiJhyoQASCn5pMjYOWS6IPYDqABpr-pugPIAQGpAnQpoLxhSEc-qAMByAPLBKoE_wFP0PlP6DwMwvk7uJ_BuvuxOUXloZL1GyNrHEZA6vtzN5gugAJKEuh6J1smb_GnUlxPTXys72DRfUUZuKZsXcgCAo7sech4QIEHHX4l_CljVE5B000LsOeXccwe8wXv8MqNK0z-O9vBcRywMQEuu6hAbIfRFxkBud_q1XJEg2ZDKPJoFWqHO8nEJphj_ZGf6t8i0Uxwre28HjLOIpIoQgT5S3iQFSfD7ZK5g3f_3Ovf6j6unTjh3krepVEGtiY7QOxsYTzN_2ChtWJMrauDtUwZ7ChLNPaPEcQF3k7hmfXeZP3FSvo3hhv5ClJmSvJbfT6Sx39lV3xLfhZG9ederXfABKKT9dLlBYgFnNO41ViAB9Hd0vYCqAep67ECqAenzLECqAfi2LECqAeo7bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAevvrECqAef4bECqAem67ECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljoxrPq8aSYA2ABsQkzV3P1itudC4AKAZgLAcgLAaIMQSoGCgT28rECYhcKFW9yZy5jb3Vyc2VyYS5jb3Vyc2VyYWoWChRvcmcuY291cnNlcmEuYW5kcm9pZHgBiAEBkAEBqg0CSU7IDQHqDRMIx_iz6vGkmAMVstlzAR3AmxYliA4JsA7Ijob-GNgTC4gUAdAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKAVBgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIpfWz6vGkmAMVstlzAR3AmxYlEAEYASAAEgJ8DfD_BwE&num=1&cid=CAQSsQIAogo4db45QJTK9odI_0pXTmgIsO8ZVWoJEyGtUJkrz40yd4GPnqX1xrqchssRZMctu-6akc6MU4gO75L2h1wimwUkDaGmX-RvbjwsD781FwGdaaarOCnXRJC-K5RyoRo_JqxwZuqRKrcagFIWhFbN7TyKqGipG_5ugkkU2qa-1J9UzsOBGEBxm-faSIfhnNEKQjOswFGp9h0WB5OlCPeaWehuUAWxG3MLjKK9NRIMG33HK2-B0vKyhHSQuD1xcJzTe8tKeGo4_WsYjLvgHXL-ff6NRtPNHRKwq_pN4MakwAtI-VV3FLgjX9tmuqtz2lX8jcrfyrrDgobOgehERHcWNcOG6tw-GtsdAt2_6rka-gNIaBsRkQGffyR4Akbm_DrvSjJk4FREojgj_4oeVGT44BgB&sig=AOD64_1rSWDGmBotT9xsTkm3sLaDfbEMXw&rf=1&nb=1&adurl=https://www.coursera.org/professional-certificates/google-advanced-data-analytics%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_x_google_ftcof_multi_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-04_desktop%26campaignid%3D23801460367%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6706792264%26targetid%3D%26extensionid%3D%26placement%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D23801506204
                        - generic [ref=f29e19] [cursor=pointer]
                        - button [ref=f29e24] [cursor=pointer]
                        - iframe
        - paragraph [ref=e192]
  - generic [ref=e193]:
    - generic [ref=e195]:
      - generic [ref=e196]:
        - heading "Footer Widget Area 1" [level=3] [ref=e197]
        - paragraph [ref=e198]:
          - link "Assign a widget to this area now." [ref=e199]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e200]:
        - heading "Footer Widget Area 2" [level=3] [ref=e201]
        - paragraph [ref=e202]:
          - link "Assign a widget to this area now." [ref=e203]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e204]:
        - heading "Footer Widget Area 3" [level=3] [ref=e205]
        - paragraph [ref=e206]:
          - link "Assign a widget to this area now." [ref=e207]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e208]:
        - heading "Footer Widget Area 4" [level=3] [ref=e209]
        - paragraph [ref=e210]:
          - link "Assign a widget to this area now." [ref=e211]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
    - generic [ref=e216]:
      - link "pinterest" [ref=e217]:
        - /url: https://in.pinterest.com/globalsqa/
      - link "twitter" [ref=e218]:
        - /url: https://twitter.com/Global_SQA
      - link "linkedin" [ref=e219]:
        - /url: https://www.linkedin.com/company/globalsqa
      - link "google" [ref=e220]:
        - /url: https://plus.google.com/103761557396023531439/posts
      - link "facebook" [ref=e221]:
        - /url: https://facebook.com/globalsqa
      - generic [ref=e222]:
        - text: "Website Designed & Developed by :"
        - link "GlobalSQA" [ref=e223]:
          - /url: https://www.globalsqa.com
```

# Test source

```ts
  1  | import{test} from'@playwright/test'
  2  | test('Globalsqa',async({page})=>{
  3  | //   await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iframe');
  4  | //   const frame = page.frameLocator("//iframe[@class=' lazyloaded']");
  5  | //   await frame.locator("//img[@alt='Jmeter Training']").click();
  6  | //   await frame.locator("//div[@id='mobile_menu_toggler;]").click();
  7  | //   await frame.getByRole('link',{name:'About'}).click();
  8  | //   await frame.getByRole('link',{name:'Load more'}).click();
  9  | //   await frame.getByText('Sortable').click();
  10 | // });
  11 | 
  12 | await page.goto("https://globalsqa.com/demo-site/frames-and-windows/#iFrame");
  13 | const frame=page.frameLocator("//iframe[@class=' lazyloaded']");
  14 | await frame.locator("//img[@alt='JMeter Training']").click();
  15 | await frame.locator("//div[@id='mobile_menu_toggler']").click();
  16 | await frame.getByRole('link',{name:'About'}).click();
  17 | await frame.getByRole('link',{name: 'Load More'}).click();
> 18 | await frame.getByText('Sortable').click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 | });
  20 | 
  21 | 
```
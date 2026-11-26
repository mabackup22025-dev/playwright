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
  - waiting for locator('//iframe[@class=\' lazyloaded\']').contentFrame().locator('//img[@alt=\'Jmeter Training\']')

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
        - generic [ref=e124]:
          - insertion:
            - iframe [ref=e126]
        - insertion [ref=e129]:
          - generic [ref=e132]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e134]: Discover more
            - link "Try Cloud Tools" [ref=e135] [cursor=pointer]
            - link "Try Dev Tools" [ref=e140] [cursor=pointer]
            - link "Learn to Code" [ref=e145] [cursor=pointer]
            - link "Compare Windows" [ref=e150] [cursor=pointer]
            - link "Windows" [ref=e155] [cursor=pointer]
            - link "Window" [ref=e160] [cursor=pointer]
            - link "window" [ref=e165] [cursor=pointer]
            - link "Upgrade Tech" [ref=e170] [cursor=pointer]
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
                  - text: Click below button to open a new tab in the same
                  - link "window" [ref=e187] [cursor=pointer]:
                    - /url: "#"
            - link "Click Here" [ref=e190] [cursor=pointer]:
              - /url: "#"
        - paragraph [ref=e191]
  - generic:
    - insertion:
      - iframe [ref=e193]
  - generic [ref=e194]:
    - generic [ref=e196]:
      - generic [ref=e197]:
        - heading "Footer Widget Area 1" [level=3] [ref=e198]
        - paragraph [ref=e199]:
          - link "Assign a widget to this area now." [ref=e200]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e201]:
        - heading "Footer Widget Area 2" [level=3] [ref=e202]
        - paragraph [ref=e203]:
          - link "Assign a widget to this area now." [ref=e204]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e205]:
        - heading "Footer Widget Area 3" [level=3] [ref=e206]
        - paragraph [ref=e207]:
          - link "Assign a widget to this area now." [ref=e208]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e209]:
        - heading "Footer Widget Area 4" [level=3] [ref=e210]
        - paragraph [ref=e211]:
          - link "Assign a widget to this area now." [ref=e212]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
    - generic [ref=e217]:
      - link "pinterest" [ref=e218]:
        - /url: https://in.pinterest.com/globalsqa/
      - link "twitter" [ref=e219]:
        - /url: https://twitter.com/Global_SQA
      - link "linkedin" [ref=e220]:
        - /url: https://www.linkedin.com/company/globalsqa
      - link "google" [ref=e221]:
        - /url: https://plus.google.com/103761557396023531439/posts
      - link "facebook" [ref=e222]:
        - /url: https://facebook.com/globalsqa
      - generic [ref=e223]:
        - text: "Website Designed & Developed by :"
        - link "GlobalSQA" [ref=e224]:
          - /url: https://www.globalsqa.com
```

# Test source

```ts
  1  | import{test} from'@playwright/test'
  2  | test('Globalsqa',async({page})=>{
  3  |   await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iframe');
  4  |   const frame = page.frameLocator("//iframe[@class=' lazyloaded']");
> 5  |   await frame.locator("//img[@alt='Jmeter Training']").click();
     |                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  6  |   await frame.locator("//div[@id='mobile_menu_toggler;]").click();
  7  |   await frame.getByRole('link',{name:'About'}).click();
  8  |   await frame.getByRole('link',{name:'Load more'}).click();
  9  |   await frame.getByText('Sortable').click();
  10 | });
  11 | 
  12 | 
  13 | 
```
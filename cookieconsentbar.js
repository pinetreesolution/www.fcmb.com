const cc = CookiesConsentJS({
  expirationDays: 1,
  buttons: ['accept', 'reject', 'dismiss'],
  content: {
    title: 'We Use Cookies!',
    message: `    
    FCMB website uses cookies to ensure necessary functionality, improve your experience and analyze our traffic. 
    By continuing into the website, you have given consent to our use of cookies. For more information read our `,
    btnAccept: 'Accept all',
    btnReject: 'Reject all',
    btnDismiss: 'Cookies policy',
    btnSettings: 'Preference',
    // btnSettings: 'Config cookies',
    btnSettingsSelectAll: 'Select all',
    btnSettingsUnselectAll: 'Unselect all',
    btnSettingsAccept: 'Accept selection',
    align: 'left',
    policy: 'Privacy Policy',
    policyLink: 'https://www.fcmb.com/privacy-policy',
    btnInfo: 'More info',
    info:
      '<h2>This is the info title</h2><br><br><p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis, venenatis pretium quam cubilia feugiat erat luctus interdum sem, praesent massa magnis volutpat leo dui velit dis torquent.</p>'
  },
  cookies: {
    statistics: {
      name: 'stats',
      description:
        '<h2>Statistic cookies</h2><p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>'
    },
    preferences: {
      name: 'prefs',
      description:
        '<h2>Preference cookies</h2><p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>',
      checked: true,
      disabled: true
    },
    profile: {
      name: 'profile',
      description:
        '<h2>Profile cookies</h2><p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>',
      disabled: true
    },
    cookie_checked: {
      name: 'cc-checked',
      description:
        '<h2>Checked cookies</h2><p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>',
      checked: true,
      disabled: false
    }
  },
  callback: {
    first_load: 'welcome',
    accept: 'enableServices',
    reject: 'disableServices',
    load: 'checkServices'
  },
  position: 'bottom-left'
})

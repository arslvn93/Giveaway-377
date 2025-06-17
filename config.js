const config = {
  "modalQuestions": [
    {
      "id": "leisure_time",
      "questionText": "How do you prefer to spend your leisure time on weekends?",
      "options": [
        { "value": "golf", "text": "Playing a round of golf" },
        { "value": "dining", "text": "Exploring new restaurants and dining experiences" },
        { "value": "relaxing", "text": "Relaxing at home or spending time with family" },
        { "value": "outdoor_activities", "text": "Engaging in other outdoor activities" }
      ]
    },
    {
      "id": "living_situation",
      "questionText": "Which of the following best describes your current living situation?",
      "options": [
        { "value": "renting", "text": "Renting an apartment or townhouse" },
        { "value": "upgrading", "text": "Owning a home but considering upgrading" },
        { "value": "retired_downsizing", "text": "Recently retired and downsizing" },
        { "value": "content", "text": "Content with current home, no plans to move" }
      ]
    },
    {
      "id": "event_participation",
      "questionText": "How often do you visit or participate in events at golf clubs or similar communities?",
      "options": [
        { "value": "member_regular", "text": "Regularly, I’m a member at a club" },
        { "value": "occasionally", "text": "Occasionally, for casual games or events" },
        { "value": "rarely_interested", "text": "Rarely, but I’m interested in becoming more involved" },
        { "value": "never", "text": "Never, it's not in my current interests" }
      ]
    },
    {
      "id": "community_amenities",
      "questionText": "Which amenities are most important to you when considering a community to live in?",
      "options": [
        { "value": "recreational_facilities", "text": "Proximity to recreational facilities like golf or sports clubs" },
        { "value": "fine_dining_social", "text": "Access to fine dining and social events" },
        { "value": "community_activities", "text": "Community activities and family-friendly environments" },
        { "value": "quiet_residential", "text": "Quiet and scenic residential areas" }
      ]
    }
  ],
  "giveaway": {
    "name": "eQuinelle Golf & Dine Giveaway",
    "heroHeadline": "Unwind in Style: Golf & Dine Giveaway",
    "heroSubheadline": "Imagine the perfect day: Golfing at the stunning eQuinelle Golf Club, followed by a gourmet dinner at The Fireside. Enter for your chance to win!",
    "promotionDates": "Promotion starts June 9, 2025 and ends June 25, 2025. Winner announced June 27, 2025.",
    "endDate": "2025-06-25T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/wj3d4rwrjhrma0cqfeca1asw74.jpg",
    "heroCtaText": "Enter Now and Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're Entered! 🎉",
    "successModalMainMessage": "Your entry for the <strong>eQuinelle Golf & Dine Giveaway</strong> has been successfully submitted. Good luck!",
    "successModalEmailPrompt": "Winner will be announced by email on June 27, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Golf & Dine Experience Package",
    "value": "$350 Value",
    "description": "Win a full 18-hole round of golf including a cart for you and a friend, plus a cozy dinner for two at The Fireside Restaurant in the beautiful eQuinelle community. Enjoy an unforgettable luxury day combining sport, relaxation, and fine dining.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/bjyewy5j91rme0cqfec9tvtc5w.jpg",
        "alt": "eQuinelle Golf Course View"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/rtr8sfy93xrm80cqfec8sjq6nw.jpg",
        "alt": "Dinner at The Fireside Restaurant"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/v8ngh8f1cxrmc0cqfec89n4z9c.jpg",
        "alt": "Golfing at eQuinelle"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/tq9afaztnxrme0cqfec9hw3z0g.jpg",
        "alt": "The Fireside Restaurant ambiance"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-golf-ball", "text": "18 holes of golf for two including cart" },
      { "icon": "fas fa-utensils", "text": "Gourmet dinner for two at The Fireside" },
      { "icon": "fas fa-map-marker-alt", "text": "Experience the scenic eQuinelle community" },
      { "icon": "fas fa-calendar-alt", "text": "Valid on any day until 4 PM" },
      { "icon": "fas fa-lock", "text": "No purchase necessary to enter or win" }
    ],
    "limitedTimeOfferText": " Limited Time Offer!",
    "ctaButtonText": "I WANT TO WIN THIS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-keyboard",
        "title": "Fill the Form",
        "description": "Enter your name and email below. It only takes a moment!"
      },
      {
        "icon": "fas fa-share-alt",
        "title": "Share (Optional)",
        "description": "Share on social media after you enter to spread the word."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Check Your Email",
        "description": "Watch for an email from us with winner details. Check spam too!"
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Quick & Easy Entry" },
      { "icon": "fas fa-gift", "text": "$350 Luxury Prize" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win this exclusive golf and dining experience!",
    "entryCountText": "Join over 1000+ participants already entered!",
    "socialSharePrompt": "Tell your friends about this amazing giveaway:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Enter now to win the eQuinelle Golf & Dine Giveaway!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Transparent Selection",
      "text": "Our winner will be chosen randomly using a certified random number generator to ensure fairness for all entrants."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be contacted by email only, so please ensure your contact details are accurate and check your inbox and spam folders regularly after the draw."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Open to legal residents aged 18+ of the region."
      },
      {
        "q": "When does the giveaway end?",
        "a": "Entry closes June 25, 2025 at 11:59 PM."
      },
      {
        "q": "How will the winner be announced?",
        "a": "Winner will be announced on June 27, 2025 via email."
      },
      {
        "q": "Can I enter more than once?",
        "a": "One entry per person. Multiple entries will be disqualified."
      },
      {
        "q": "Is my information secure?",
        "a": "We respect your privacy and only use your data for this giveaway following our Privacy Policy."
      }
    ],
    "tips": [
      "Make sure your email is correct before submitting.",
      "Add our contact email to your address book to avoid missing notifications.",
      "Follow Driscoll-Peca Team on social media for updates and winner announcement."
    ]
  },
  "footerContact": {
    "organizerName": "Driscoll-Peca Team",
    "organizerLogoUrl": "",
    "email": "amber@driscollpeca.com",
    "phone": "6138160326",
    "address": "218 Brant Avenue\nBrantford ON N3T 3H9",
    "social": {
      "facebook": "https://www.facebook.com/driscollpecateam",
      "instagram": "https://instagram.com/ae.parks"
    },
    "copyrightOwner": "Driscoll-Peca Team"
  },
  "meta": {
    "pageTitle": "eQuinelle Golf & Dine Giveaway!",
    "navBrandLogoText": "eQuinelle Giveaway",
    "privacyPolicyLink": "https://driscollpeca.com/privacy.html"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#006633", "#66cc33", "#005522", "#b3ff66", "#334400"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-377",
    "repoUrl": "https://github.com/arslvn93/Giveaway-377",
    "tag": "eQuinelle Golf & Dine",
    "netlifyUrl": "http://Giveaway-377.netlify.app",
    "netlifyId": "1003333839"
  }
};

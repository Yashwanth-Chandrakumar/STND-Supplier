import { Globe, Cpu, Handshake, Shirt, Scissors, Briefcase, Mail, Clock, BarChart3, Search, Send, CheckCircle2, DollarSign, Plane, Users, Zap, FileText } from 'lucide-react';

export type LanguageType = 'en' | 'hi' | 'ta';

// Keeping PROCESS_STEPS in case it is needed later, though not rendered in App.tsx
export const PROCESS_STEPS = [
  {
    title: 'Profile Audit',
    description: 'We analyze your factory strengths and certifications to create a compelling supplier profile.',
    icon: Search
  },
  {
    title: 'Smart Matching',
    description: 'Our algorithms match you with 700+ global brands looking for your specific product capabilities.',
    icon: Users
  },
  {
    title: 'Direct Outreach',
    description: 'We initiate personalized contact with decision-makers, bypassing intermediaries.',
    icon: Send
  },
  {
    title: 'Deal Closure',
    description: 'We facilitate communication and negotiation to help you secure profitable export orders.',
    icon: Handshake
  }
];

export const CONTACT_INFO = {
  email: 'info@stnd.in',
  location: 'Global Operations (HQ: India)',
  brands: ['Guess', 'Urban Outfitters', 'Original Marines', 'And 700+ More'],
};

export const TRANSLATIONS = {
  en: {
    nav: {
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Comparison', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
      ],
      cta: 'Start Exporting'
    },
    hero: {
      badge: 'Sourcing Technology & Network Development',
      title: 'Global Reach for Your',
      titleHighlight: 'Manufacturing Business.',
      subtitle: 'We act as your Remote Export Marketing Team. Blending textile heritage with data-driven precision to connect you with 700+ global brands.',
      ctaPrimary: 'Start Your Export Journey',
      ctaSecondary: 'How It Works'
    },
    about: {
      badgeTitle: 'The STND Advantage',
      badgeDesc: 'Merging Data Science precision with deep Textile Heritage.',
      title: 'More Than Agents.',
      titleHighlight: 'We Are Your Tech-Enabled Partners.',
      p1: 'At STND (Sourcing Technology & Network Development), we bridge the gap between traditional Indian manufacturing and the modern global marketplace. Founded on a unique intersection of Advanced Analytics and Textile Heritage, we don\'t just rely on a static rolodex; we use algorithms, CRM systems, and predictive modeling.',
      p2: 'We understand that finding buyers is a numbers game played with precision. Our goal is to put your products in front of the right decision-makers, offering a transparent sourcing process that traditional agents simply cannot match.',
      cards: [
        { title: 'Global Comms', desc: 'Communication in all time zones.' },
        { title: 'Market Intelligence', desc: 'Data-driven buyer targeting.' },
        { title: 'Transparent', desc: 'Full visibility into our outreach.' },
        { title: 'Heritage', desc: 'Deep roots in textile production.' }
      ]
    },
    services: {
      title: 'What We Source',
      desc: 'We specialize in connecting buyers with manufacturers across three core verticals, ensuring your capabilities meet the exact needs of international brands.',
      items: [
        {
          title: 'Knitwear Garments',
          description: 'Connecting high-quality knitwear manufacturers with global fashion retailers seeking precision and speed.',
        },
        {
          title: 'Woven Garments',
          description: 'Sourcing partners for structured woven apparel, ensuring compliance and craftsmanship meets international standards.',
        },
        {
          title: 'Basic Accessories',
          description: 'Expanding your reach into the accessories market, bundling capabilities for comprehensive buyer solutions.',
        },
      ],
      stats: [
        { title: '100+', desc: 'Targeted mails sent daily on your behalf' },
        { title: 'Same Day', desc: 'Response to all buyer inquiries' },
        { title: 'High Conversion', desc: 'Optimized outreach pipelines' }
      ]
    },
    pricing: {
      title: 'Why Choose STND?',
      desc: 'Stop paying high salaries for limited results. We offer a transparent, performance-focused model designed for the modern manufacturer.',
      guarantee: {
        title: 'The STND Performance Guarantee',
        stat1Value: '80%',
        stat1Label: 'Buyer Communication within 1 Month',
        stat2Value: '100%',
        stat2Label: 'Buyer Communication within 2 Months',
        disclaimer: '* Note on "Buyer Communication": This guarantee refers to a verified response from a decision-maker. This includes price negotiations, expressions of future interest, notifications that suppliers are not currently needed, or explicit rejections. We value transparency and closing the communication loop over silence.'
      },
      table: {
        headerFeature: 'Feature',
        headerConv: 'Conventional Agent',
        headerStnd: 'STND.',
        rec: 'Recommended',
        rows: [
          { feature: "Monthly Cost", conv: "High Fixed Salary (Avg ₹1 Lakh+)", stnd: "Optimized Retainer (₹40,000)" },
          { feature: "Commission", conv: "High (5-7%)", stnd: "Performance Based (2.5%)" },
          { feature: "Network Access", conv: "Limited to personal rolodex", stnd: "10,000+ Contacts & 700+ Brands" },
          { feature: "Travel Expenses", conv: "Billable to Manufacturer (Flights/Stay)", stnd: "Zero (100% Remote Digital Marketing)" },
          { feature: "Availability", conv: "Single Time Zone availability", stnd: "24/7 Global Ops Team" },
          { feature: "Reporting", conv: "Ad-hoc / Manual updates", stnd: "Real-time CRM & Analytics" },
          { feature: "Outreach Volume", conv: "Limited manual calls/emails", stnd: "100+ Targeted interactions daily" }
        ],
        cta: 'Partner With STND',
        mobileTitle1: 'Conventional Agent',
        mobileTitle2: 'The STND Way',
        mobileBadge: 'STND MODEL'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      desc: 'Everything you need to know about partnering with STND.',
      items: [
        {
          question: "How many brands do you have contact with?",
          answer: "We have direct access to a curated database of over 700+ global brands. This includes major high-street retailers, boutique fashion labels, and large-scale distributors across various market segments."
        },
        {
          question: "What time zones do you work in?",
          answer: "Our operations are truly global. We work across all major time zones including Australian, European, and American markets (USA, Canada, Mexico, and South America). This ensures real-time communication with buyers regardless of their location."
        },
        {
          question: "Do you guarantee orders?",
          answer: "While no agency can ethically guarantee orders due to market variables, we DO guarantee performance: specifically, outreach volume and verified communication. We guarantee your product gets in front of decision-makers. Our 'Performance Guarantee' ensures you get buyer responses within the first 60 days."
        },
        {
          question: "Why is STND better than a marketing or sourcing staff?",
          answer: "Because we charge less and our commission is lower. While internal staff often take 6 months to build engagement, we achieve results in 1 or 2 months."
        },
        {
          question: "How is STND different from a Buying House?",
          answer: "Buying houses represent the buyer and often aim to lower your margins to please their clients. STND represents YOU, the manufacturer. We act as your outbound marketing team, fighting for your interests and helping you negotiate better terms directly with brands."
        },
        {
          question: "Is there a long-term contract lock-in?",
          answer: "No. We operate on a flexible, transparent pay-as-you-go monthly model. You can cancel anytime if you feel the partnership isn't delivering value, keeping us accountable to perform every single month."
        }
      ]
    },
    footer: {
      brandDesc: 'Ready to streamline your marketing? Request a 15-minute discovery call and see how we can transform your export business.',
      contactTitle: 'Contact Us',
      actionTitle: 'Action',
      navLinks: {
        about: 'About Us',
        services: 'Our Services',
        pricing: 'Comparison',
        faq: 'FAQ'
      },
      cta: 'Schedule Discovery Call',
      rights: 'STND. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  hi: {
    nav: {
      links: [
        { name: 'होम', href: '#home' },
        { name: 'हमारे बारे में', href: '#about' },
        { name: 'सेवाएं', href: '#services' },
        { name: 'तुलना', href: '#pricing' },
        { name: 'प्रश्न-उत्तर', href: '#faq' },
        { name: 'संपर्क', href: '#contact' },
      ],
      cta: 'निर्यात शुरू करें'
    },
    hero: {
      badge: 'सोर्सिंग टेक्नोलॉजी और नेटवर्क डेवलपमेंट',
      title: 'आपके विनिर्माण व्यवसाय के लिए',
      titleHighlight: 'वैश्विक पहुंच।',
      subtitle: 'हम आपकी रिमोट एक्सपोर्ट मार्केटिंग टीम के रूप में कार्य करते हैं। 700+ वैश्विक ब्रांडों के साथ आपको जोड़ने के लिए डेटा-संचालित सटीकता के साथ कपड़ा विरासत का मिश्रण।',
      ctaPrimary: 'अपनी निर्यात यात्रा शुरू करें',
      ctaSecondary: 'यह कैसे काम करता है'
    },
    about: {
      badgeTitle: 'STND का लाभ',
      badgeDesc: 'गहरी कपड़ा विरासत के साथ डेटा विज्ञान सटीकता का विलय।',
      title: 'एजेंटों से कहीं अधिक।',
      titleHighlight: 'हम आपके तकनीक-सक्षम भागीदार हैं।',
      p1: 'STND (सोर्सिंग टेक्नोलॉजी एंड नेटवर्क डेवलपमेंट) में, हम पारंपरिक भारतीय विनिर्माण और आधुनिक वैश्विक बाजार के बीच की खाई को पाटते हैं। उन्नत एनालिटिक्स और कपड़ा विरासत के अनूठे संगम पर स्थापित, हम केवल पुराने संपर्कों पर निर्भर नहीं हैं; हम एल्गोरिदम, सीआरएम सिस्टम और पूर्वानुमानित मॉडलिंग का उपयोग करते हैं।',
      p2: 'हम समझते हैं कि खरीदारों को ढूंढना सटीकता के साथ खेला जाने वाला संख्याओं का खेल है। हमारा लक्ष्य आपके उत्पादों को सही निर्णय लेने वालों के सामने रखना है, एक पारदर्शी सोर्सिंग प्रक्रिया की पेशकश करना जो पारंपरिक एजेंट बस मेल नहीं खा सकते हैं।',
      cards: [
        { title: 'वैश्विक संचार', desc: 'सभी समय क्षेत्रों में संचार।' },
        { title: 'बाजार खुफिया', desc: 'डेटा-संचालित खरीदार लक्ष्यीकरण।' },
        { title: 'पारदर्शी', desc: 'हमारी पहुंच में पूर्ण दृश्यता।' },
        { title: 'विरासत', desc: 'कपड़ा उत्पादन में गहरी जड़ें।' }
      ]
    },
    services: {
      title: 'हम क्या सोर्स करते हैं',
      desc: 'हम तीन प्रमुख कार्यक्षेत्रों में खरीदारों को निर्माताओं के साथ जोड़ने में विशेषज्ञ हैं, यह सुनिश्चित करते हुए कि आपकी क्षमताएं अंतरराष्ट्रीय ब्रांडों की सटीक आवश्यकताओं को पूरा करती हैं।',
      items: [
        {
          title: 'निटवेअर गारमेंट्स',
          description: 'सटीकता और गति चाहने वाले वैश्विक फैशन खुदरा विक्रेताओं के साथ उच्च गुणवत्ता वाले निटवेअर निर्माताओं को जोड़ना।',
        },
        {
          title: 'वोवन गारमेंट्स',
          description: 'संरचित बुने हुए परिधानों के लिए सोर्सिंग भागीदार, अनुपालन और शिल्प कौशल सुनिश्चित करना अंतरराष्ट्रीय मानकों को पूरा करता है।',
        },
        {
          title: 'बुनियादी सामान',
          description: 'व्यापक खरीदार समाधानों के लिए क्षमताओं को बंडल करते हुए, सामान बाजार में अपनी पहुंच का विस्तार करना।',
        },
      ],
      stats: [
        { title: '100+', desc: 'आपकी ओर से प्रतिदिन भेजे जाने वाले लक्षित मेल' },
        { title: 'उसी दिन', desc: 'सभी खरीदार पूछताछ का जवाब' },
        { title: 'उच्च रूपांतरण', desc: 'अनुकूलित आउटरीच पाइपलाइन' }
      ]
    },
    pricing: {
      title: 'STND क्यों चुनें?',
      desc: 'सीमित परिणामों के लिए उच्च वेतन का भुगतान करना बंद करें। हम आधुनिक निर्माता के लिए डिज़ाइन किया गया एक पारदर्शी, प्रदर्शन-केंद्रित मॉडल प्रदान करते हैं।',
      guarantee: {
        title: 'STND प्रदर्शन गारंटी',
        stat1Value: '80%',
        stat1Label: '1 महीने के भीतर खरीदार संचार',
        stat2Value: '100%',
        stat2Label: '2 महीने के भीतर खरीदार संचार',
        disclaimer: '* "खरीदार संचार" पर ध्यान दें: यह गारंटी निर्णय लेने वाले से सत्यापित प्रतिक्रिया को संदर्भित करती है। इसमें मूल्य वार्ता, भविष्य के ब्याज की अभिव्यक्ति, अधिसूचनाएं शामिल हैं कि आपूर्तिकर्ताओं की वर्तमान में आवश्यकता नहीं है, या स्पष्ट अस्वीकृति। हम मौन पर पारदर्शिता और संचार पाश को बंद करने को महत्व देते हैं।'
      },
      table: {
        headerFeature: 'सुविधा',
        headerConv: 'पारंपरिक एजेंट',
        headerStnd: 'STND.',
        rec: 'अनुशंसित',
        rows: [
          { feature: "मासिक लागत", conv: "उच्च निश्चित वेतन (औसत ₹1 लाख+)", stnd: "अनुकूलित रिटेनर (₹40,000)" },
          { feature: "कमीशन", conv: "उच्च (5-7%)", stnd: "प्रदर्शन आधारित (2.5%)" },
          { feature: "नेटवर्क एक्सेस", conv: "व्यक्तिगत संपर्कों तक सीमित", stnd: "10,000+ संपर्क और 700+ ब्रांड" },
          { feature: "यात्रा व्यय", conv: "निर्माता के लिए बिल योग्य (उड़ानें/रहना)", stnd: "शून्य (100% रिमोट डिजिटल मार्केटिंग)" },
          { feature: "उपलब्धता", conv: "एकल समय क्षेत्र उपलब्धता", stnd: "24/7 ग्लोबल ऑप्स टीम" },
          { feature: "रिपोर्टिंग", conv: "एड-हॉक / मैनुअल अपडेट", stnd: "रीयल-टाइम सीआरएम और एनालिटिक्स" },
          { feature: "आउटरीच वॉल्यूम", conv: "सीमित मैनुअल कॉल/ईमेल", stnd: "100+ लक्षित बातचीत दैनिक" }
        ],
        cta: 'STND के साथ भागीदार बनें',
        mobileTitle1: 'पारंपरिक एजेंट',
        mobileTitle2: 'STND का तरीका',
        mobileBadge: 'STND मॉडल'
      }
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      desc: 'STND के साथ साझेदारी के बारे में आपको जो कुछ भी जानने की आवश्यकता है।',
      items: [
        {
          question: "आप कितने ब्रांडों के संपर्क में हैं?",
          answer: "हमारे पास 700+ से अधिक वैश्विक ब्रांडों के क्यूरेटेड डेटाबेस तक सीधी पहुंच है। इसमें प्रमुख हाई-स्ट्रीट रिटेलर्स, बुटीक फैशन लेबल और विभिन्न बाजार क्षेत्रों में बड़े पैमाने पर वितरक शामिल हैं।"
        },
        {
          question: "आप किन समय क्षेत्रों में काम करते हैं?",
          answer: "हमारा संचालन वास्तव में वैश्विक है। हम ऑस्ट्रेलियाई, यूरोपीय और अमेरिकी बाजारों (यूएसए, कनाडा, मैक्सिको और दक्षिण अमेरिका) सहित सभी प्रमुख समय क्षेत्रों में काम करते हैं। यह खरीदारों के साथ रीयल-टाइम संचार सुनिश्चित करता है, चाहे वे कहीं भी हों।"
        },
        {
          question: "क्या आप ऑर्डर की गारंटी देते हैं?",
          answer: "जबकि बाजार के चर के कारण कोई भी एजेंसी नैतिक रूप से ऑर्डर की गारंटी नहीं दे सकती है, हम प्रदर्शन की गारंटी देते हैं: विशेष रूप से, आउटरीच वॉल्यूम और सत्यापित संचार। हम गारंटी देते हैं कि आपका उत्पाद निर्णय लेने वालों के सामने आता है। हमारी 'प्रदर्शन गारंटी' सुनिश्चित करती है कि आपको पहले 60 दिनों के भीतर खरीदार की प्रतिक्रिया मिले।"
        },
        {
          question: "मार्केटिंग या सोर्सिंग स्टाफ की तुलना में STND बेहतर क्यों है?",
          answer: "क्योंकि हम कम शुल्क लेते हैं और हमारा कमीशन कम है। जहां स्टाफ को एंगेजमेंट बनाने में 6 महीने लगते हैं, हम इसे 1 या 2 महीनों में कर देते हैं।"
        },
        {
          question: "STND एक बाइंग हाउस (Buying House) से कैसे अलग है?",
          answer: "बाइंग हाउस खरीदार का प्रतिनिधित्व करते हैं और अक्सर अपने ग्राहकों को खुश करने के लिए आपके मार्जिन को कम करने का लक्ष्य रखते हैं। STND आपका, निर्माता का प्रतिनिधित्व करता है। हम आपकी आउटबाउंड मार्केटिंग टीम के रूप में कार्य करते हैं, आपके हितों के लिए लड़ते हैं और ब्रांडों के साथ सीधे बेहतर शर्तों पर बातचीत करने में आपकी सहायता करते हैं।"
        },
        {
          question: "क्या कोई दीर्घकालिक अनुबंध लॉक-इन है?",
          answer: "नहीं। हम एक लचीले, पारदर्शी मासिक मॉडल पर काम करते हैं। यदि आपको लगता है कि साझेदारी मूल्य प्रदान नहीं कर रही है, तो आप किसी भी समय रद्द कर सकते हैं, हमें हर महीने प्रदर्शन करने के लिए जवाबदेह रखते हुए।"
        }
      ]
    },
    footer: {
      brandDesc: 'अपनी मार्केटिंग को सुव्यवस्थित करने के लिए तैयार हैं? 15 मिनट की डिस्कवरी कॉल का अनुरोध करें और देखें कि हम आपके निर्यात व्यवसाय को कैसे बदल सकते हैं।',
      contactTitle: 'संपर्क करें',
      actionTitle: 'कार्रवाई',
      navLinks: {
        about: 'हमारे बारे में',
        services: 'हमारी सेवाएं',
        pricing: 'तुलना',
        faq: 'प्रश्न-उत्तर'
      },
      cta: 'डिस्कवरी कॉल शेड्यूल करें',
      rights: 'STND। सर्वाधिकार सुरक्षित।',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें'
    }
  },
  ta: {
    nav: {
      links: [
        { name: 'முகப்பு', href: '#home' },
        { name: 'எங்களை பற்றி', href: '#about' },
        { name: 'சேவைகள்', href: '#services' },
        { name: 'ஒப்பீடு', href: '#pricing' },
        { name: 'கேள்வி பதில்', href: '#faq' },
        { name: 'தொடர்பு', href: '#contact' },
      ],
      cta: 'ஏற்றுமதியை தொடங்குங்கள்'
    },
    hero: {
      badge: 'சோர்சிங் டெக்னாலஜி & நெட்வொர்க் டெவலப்மெண்ட்',
      title: 'உங்கள் உற்பத்தி வணிகத்திற்கான',
      titleHighlight: 'உலகளாவிய அணுகல்.',
      subtitle: 'நாங்கள் உங்கள் தொலைநிலை ஏற்றுமதி சந்தைப்படுத்தல் குழுவாக செயல்படுகிறோம். 700+ உலகளாவிய பிராண்டுகளுடன் உங்களை இணைக்க தரவு சார்ந்த துல்லியத்துடன் ஜவுளி பாரம்பரியத்தை கலக்கிறோம்.',
      ctaPrimary: 'ஏற்றுமதி பயணத்தை தொடங்குங்கள்',
      ctaSecondary: 'இது எப்படி வேலை செய்கிறது'
    },
    about: {
      badgeTitle: 'STND நன்மை',
      badgeDesc: 'ஆழ்ந்த ஜவுளி பாரம்பரியத்துடன் தரவு அறிவியல் துல்லியத்தை இணைக்கிறது.',
      title: 'முகவர்களை விட அதிகம்.',
      titleHighlight: 'நாங்கள் உங்கள் தொழில்நுட்ப கூட்டாளர்கள்.',
      p1: 'STND இல் (சோர்சிங் டெக்னாலஜி & நெட்வொர்க் டெவலப்மெண்ட்), பாரம்பரிய இந்திய உற்பத்திக்கும் நவீன உலகளாவிய சந்தைக்கும் இடையே உள்ள இடைவெளியைக் குறைக்கிறோம். மேம்பட்ட பகுப்பாய்வு மற்றும் ஜவுளி பாரம்பரியத்தின் தனித்துவமான சந்திப்பில் நிறுவப்பட்டது, நாங்கள் பழைய தொடர்புகளை மட்டும் நம்புவதில்லை; நாங்கள் வழிமுறைகள், CRM அமைப்புகள் மற்றும் முன்கணிப்பு மாதிரிகளைப் பயன்படுத்துகிறோம்.',
      p2: 'வாங்குபவர்களைக் கண்டுபிடிப்பது துல்லியத்துடன் விளையாடப்படும் எண்களின் விளையாட்டு என்பதை நாங்கள் புரிந்துகொள்கிறோம். உங்கள் தயாரிப்புகளை சரியான முடிவெடுப்பவர்களுக்கு முன் வைப்பதே எங்கள் குறிக்கோள், பாரம்பரிய முகவர்களால் பொருந்தாத வெளிப்படையான சோர்சிங் செயல்முறையை வழங்குகிறது.',
      cards: [
        { title: 'உலகளாவிய தொடர்பு', desc: 'அனைத்து நேர மண்டலங்களிலும் தொடர்பு.' },
        { title: 'சந்தை நுண்ணறிவு', desc: 'தரவு சார்ந்த வாங்குபவர் இலக்கு.' },
        { title: 'வெளிப்படையானது', desc: 'எங்கள் அணுகலில் முழுத் தெரிவுநிலை.' },
        { title: 'பாரம்பரியம்', desc: 'ஜவுளி உற்பத்தியில் ஆழமான வேர்கள்.' }
      ]
    },
    services: {
      title: 'நாங்கள் என்ன சோர்ஸ் செய்கிறோம்',
      desc: 'சர்வதேச பிராண்டுகளின் சரியான தேவைகளை உங்கள் திறன்கள் பூர்த்தி செய்வதை உறுதிசெய்து, மூன்று முக்கிய செங்குத்துகளில் உற்பத்தியாளர்களுடன் வாங்குபவர்களை இணைப்பதில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.',
      items: [
        {
          title: 'நிட்வேர் ஆடைகள்',
          description: 'துல்லியம் மற்றும் வேகத்தைத் தேடும் உலகளாவிய ஃபேஷன் சில்லறை விற்பனையாளர்களுடன் உயர்தர நிட்வேர் உற்பத்தியாளர்களை இணைத்தல்.',
        },
        {
          title: 'வோவன் ஆடைகள்',
          description: 'கட்டமைக்கப்பட்ட நெய்த ஆடைகளுக்கான சோர்சிங் கூட்டாளர்கள், இணக்கம் மற்றும் கைவினைத்திறன் சர்வதேச தரத்தை பூர்த்தி செய்வதை உறுதி செய்கிறது.',
        },
        {
          title: 'அடிப்படை அணிகலன்கள்',
          description: 'விரிவான வாங்குபவர் தீர்வுகளுக்கான திறன்களை ஒருங்கிணைத்து, அணிகலன்கள் சந்தையில் உங்கள் வரம்பை விரிவுபடுத்துதல்.',
        },
      ],
      stats: [
        { title: '100+', desc: 'உங்கள் சார்பாக தினமும் அனுப்பப்படும் இலக்கு மின்னஞ்சல்கள்' },
        { title: 'அதே நாள்', desc: 'அனைத்து வாங்குபவர் விசாரணைகளுக்கும் பதில்' },
        { title: 'உயர் மாற்றம்', desc: 'மேம்படுத்தப்பட்ட அவுட்ரீச் பைப்லைன்கள்' }
      ]
    },
    pricing: {
      title: 'STND ஐ ஏன் தேர்வு செய்ய வேண்டும்?',
      desc: 'வரையறுக்கப்பட்ட முடிவுகளுக்கு அதிக சம்பளம் வழங்குவதை நிறுத்துங்கள். நவீன உற்பத்தியாளருக்காக வடிவமைக்கப்பட்ட வெளிப்படையான, செயல்திறன் சார்ந்த மாதிரியை நாங்கள் வழங்குகிறோம்.',
      guarantee: {
        title: 'STND செயல்திறன் உத்தரவாதம்',
        stat1Value: '80%',
        stat1Label: '1 மாதத்திற்குள் வாங்குபவர் தொடர்பு',
        stat2Value: '100%',
        stat2Label: '2 மாதத்திற்குள் வாங்குபவர் தொடர்பு',
        disclaimer: '* "வாங்குபவர் தொடர்பு" பற்றிய குறிப்பு: இந்த உத்தரவாதமானது முடிவெடுப்பவரின் சரிபார்க்கப்பட்ட பதிலைக் குறிக்கிறது. இதில் விலைப் பேச்சுவார்த்தைகள், எதிர்கால ஆர்வத்தின் வெளிப்பாடுகள், சப்ளையர்கள் தற்போது தேவையில்லை என்ற அறிவிப்புகள் அல்லது வெளிப்படையான நிராகரிப்புகள் ஆகியவை அடங்கும். மௌனத்தை விட வெளிப்படைத்தன்மையையும் தகவல் தொடர்பு வளையத்தை மூடுவதையும் நாங்கள் மதிக்கிறோம்.'
      },
      table: {
        headerFeature: 'அம்சம்',
        headerConv: 'வழக்கமான முகவர்',
        headerStnd: 'STND.',
        rec: 'பரிந்துரைக்கப்பட்டது',
        rows: [
          { feature: "மாதாந்திர செலவு", conv: "அதிக நிலையான சம்பளம் (சராசரி ₹1 லட்சம்+)", stnd: "உகந்த தக்கவைப்பு (₹40,000)" },
          { feature: "கமிஷன்", conv: "அதிக (5-7%)", stnd: "செயல்திறன் சார்ந்தது (2.5%)" },
          { feature: "நெட்வொர்க் அணுகல்", conv: "தனிப்பட்ட தொடர்புகளுக்கு வரம்பிடப்பட்டுள்ளது", stnd: "10,000+ தொடர்புகள் & 700+ பிராண்டுகள்" },
          { feature: "பயண செலவுகள்", conv: "உற்பத்தியாளருக்கு பில் செய்யக்கூடியது (விமானங்கள்/தங்குதல்)", stnd: "பூஜ்ஜியம் (100% ரிமோட் டிஜிட்டல் மார்க்கெட்டிங்)" },
          { feature: "கிடைக்கும் தன்மை", conv: "ஒற்றை நேர மண்டலம் கிடைக்கும்", stnd: "24/7 குளோபல் ஆப்ஸ் டீம்" },
          { feature: "அறிக்கை", conv: "தற்காலிக / கைமுறை புதுப்பிப்புகள்", stnd: "நிகழ்நேர CRM & Analytics" },
          { feature: "அவுட்ரீச் வால்யூம்", conv: "வரையறுக்கப்பட்ட கைமுறை அழைப்புகள்/மின்னஞ்சல்கள்", stnd: "தினசரி 100+ இலக்கு தொடர்புகள்" }
        ],
        cta: 'STND உடன் இணையுங்கள்',
        mobileTitle1: 'வழக்கமான முகவர்',
        mobileTitle2: 'STND வழி',
        mobileBadge: 'STND மாதிரி'
      }
    },
    faq: {
      title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      desc: 'STND உடன் கூட்டுசேர்வது பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.',
      items: [
        {
          question: "எத்தனை பிராண்டுகளுடன் உங்களுக்கு தொடர்பு உள்ளது?",
          answer: "700+ க்கும் மேற்பட்ட உலகளாவிய பிராண்டுகளின் க்யூரேட்டட் தரவுத்தளத்திற்கு எங்களிடம் நேரடி அணுகல் உள்ளது. இதில் முக்கிய ஹை-ஸ்ட்ரீட் சில்லறை விற்பனையாளர்கள், பூட்டிக் ஃபேஷன் லேபிள்கள் மற்றும் பல்வேறு சந்தைப் பிரிவுகளில் உள்ள பெரிய விநியோகஸ்தர்கள் உள்ளனர்."
        },
        {
          question: "நீங்கள் எந்த நேர மண்டலங்களில் வேலை செய்கிறீர்கள்?",
          answer: "எங்கள் செயல்பாடுகள் உண்மையிலேயே உலகளாவியவை. ஆஸ்திரேலியா, ஐரோப்பிய மற்றும் அமெரிக்க சந்தைகள் (அமெரிக்கா, கனடா, மெக்சிகோ மற்றும் தென் அமெரிக்கா) உட்பட அனைத்து முக்கிய நேர மண்டலங்களிலும் நாங்கள் பணியாற்றுகிறோம். வாங்குபவர்கள் எங்கிருந்தாலும் அவர்களுடன் நிகழ்நேர தொடர்பை இது உறுதி செய்கிறது."
        },
        {
          question: "ஆர்டர்களுக்கு உத்தரவாதம் அளிக்கிறீர்களா?",
          answer: "சந்தை மாறிகள் காரணமாக எந்தவொரு நிறுவனமும் நெறிமுறைப்படி ஆர்டர்களுக்கு உத்தரவாதம் அளிக்க முடியாது என்றாலும், நாங்கள் செயல்திறனுக்கு உத்தரவாதம் அளிக்கிறோம்: குறிப்பாக, அவுட்ரீச் அளவு மற்றும் சரிபார்க்கப்பட்ட தொடர்பு. உங்கள் தயாரிப்பு முடிவெடுப்பவர்களுக்கு முன்னால் செல்வதை நாங்கள் உத்தரவாதம் செய்கிறோம். எங்கள் 'செயல்திறன் உத்தரவாதம்' முதல் 60 நாட்களுக்குள் வாங்குபவரின் பதில்களைப் பெறுவதை உறுதி செய்கிறது."
        },
        {
          question: "சந்தைப்படுத்தல் அல்லது சோர்சிங் ஊழியர்களை விட STND ஏன் சிறந்தது?",
          answer: "ஏனென்றால் நாங்கள் குறைவாக கட்டணம் வசூலிக்கிறோம் மற்றும் எங்கள் கமிஷன் குறைவு. ஊழியர்கள் ஈடுபாட்டிற்கு 6 மாதங்கள் எடுக்கும் நிலையில், நாங்கள் அதை 1 அல்லது 2 மாதங்களில் செய்கிறோம்."
        },
        {
          question: "STND ஒரு பையிங் ஹவுஸில் (Buying House) இருந்து எவ்வாறு வேறுபட்டது?",
          answer: "பையிங் ஹவுஸ் வாங்குபவரைப் பிரதிநிதித்துவப்படுத்துகின்றன மற்றும் பெரும்பாலும் தங்கள் வாடிக்கையாளர்களைப் பிரியப்படுத்த உங்கள் விளிம்புகளைக் குறைப்பதை நோக்கமாகக் கொண்டுள்ளன. STND உற்பத்தியாளரான உங்களைப் பிரதிபலிக்கிறது. நாங்கள் உங்கள் அவுட்பவுண்ட் மார்க்கெட்டிங் குழுவாகச் செயல்படுகிறோம், உங்கள் நலன்களுக்காகப் போராடுகிறோம் மற்றும் பிராண்டுகளுடன் நேரடியாக சிறந்த விதிமுறைகளைப் பற்றி பேச்சுவார்த்தை நடத்த உங்களுக்கு உதவுகிறோம்."
        },
        {
          question: "நீண்ட கால ஒப்பந்த லாக்-இன் உள்ளதா?",
          answer: "இல்லை. நாங்கள் நெகிழ்வான, வெளிப்படையான மாதாந்திர மாதிரியில் செயல்படுகிறோம். கூட்டாண்மை மதிப்பை வழங்கவில்லை என்று நீங்கள் உணர்ந்தால், எந்த நேரத்திலும் ரத்துசெய்யலாம், ஒவ்வொரு மாதமும் செயல்படுவதற்கு எங்களைப் பொறுப்பாக்கலாம்."
        }
      ]
    },
    footer: {
      brandDesc: 'உங்கள் சந்தைப்படுத்தலை சீரமைக்கத் தயாரா? 15 நிமிட டிஸ்கவரி அழைப்பைக் கோருங்கள், உங்கள் ஏற்றுமதி வணிகத்தை நாங்கள் எவ்வாறு மாற்றலாம் என்பதைப் பாருங்கள்.',
      contactTitle: 'எங்களை தொடர்பு கொள்ள',
      actionTitle: 'செயல்',
      navLinks: {
        about: 'எங்களை பற்றி',
        services: 'எங்கள் சேவைகள்',
        pricing: 'ஒப்பீடு',
        faq: 'கேள்வி பதில்'
      },
      cta: 'டிஸ்கவரி அழைப்பைத் திட்டமிடுங்கள்',
      rights: 'STND. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      privacy: 'தனியுரிமை கொள்கை',
      terms: 'சேவை விதிமுறைகள்'
    }
  }
};

export const ICONS = {
  Knitwear: Shirt,
  Woven: Scissors,
  Accessories: Briefcase,
  MonthlyCost: DollarSign,
  Commission: BarChart3,
  Network: Users,
  Travel: Plane,
  Availability: Clock,
  Reporting: FileText,
  Outreach: Zap
};
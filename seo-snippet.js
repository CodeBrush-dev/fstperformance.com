// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.fstperformance.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.fstperformance.com/","title_tag":"Fuel Filters & High Performance Filters | FST Performance","meta_description":"Ultra-efficient FST Filtration for racing fuel systems, ethanol fuel filters and diesel fuel filtering with FloMax filters, water separation system and TurboFyner system."},{"page_url":"https://www.fstperformance.com/rpm300","title_tag":"High Performance Fuel Filters RPM300 | FST Performance","meta_description":"Compact RPM300 FloMax fuel filter system with 4 micron FST Filtration for racing fuel systems and performance fuel protection with advanced water separation."},{"page_url":"https://www.fstperformance.com/rpm350","title_tag":"Fuel Filters RPM350 Street Rod System | FST Performance","meta_description":"RPM350 FloMax high performance fuel filter for street rods and racing fuel systems, offering 4 micron FST Filtration and efficient water separation for performance fuel."},{"page_url":"https://www.fstperformance.com/rpm500","title_tag":"High Performance Filters RPM500 FloMax | FST Performance","meta_description":"RPM500 FloMax 3 micron high performance fuel filter for racing fuel systems and performance fuel, featuring advanced FST Filtration and water separation system."},{"page_url":"https://www.fstperformance.com/rpm560","title_tag":"FloMax Filters RPM560 Big Deuce | FST Performance","meta_description":"RPM560 Big Deuce dual FloMax filters deliver 3 micron FST Filtration for high flow racing fuel systems and diesel-compatible performance fuel filtration."},{"page_url":"https://www.fstperformance.com/rpm700","title_tag":"Racing Fuel Systems RPM700 Filter | FST Performance","meta_description":"NASCAR-approved RPM700 FloMax high performance fuel filter with 4 micron FST Filtration for racing fuel systems and ethanol-compatible performance fuel."},{"page_url":"https://www.fstperformance.com/rpm900","title_tag":"TurboFyner System RPM900 Diesel Filter | FST Performance","meta_description":"RPM900 TurboFyner system for diesel fuel filtering with 3 micron FST Filtration, integrated water separation system and heated performance fuel refining."},{"page_url":"https://www.fstperformance.com/rpm900-turbofyner-system","title_tag":"TurboFyner System Fuel Refining | FST Performance","meta_description":"TurboFyner system delivers 3 micron FST Filtration, diesel fuel filtering, water separation system and heated performance fuel for severe-duty applications."},{"page_url":"https://www.fstperformance.com/about-3-1","title_tag":"NEW FST Filtration Products & Filters | FST Performance","meta_description":"Explore new FST Filtration accessories, FloMax filters, FilterShield and fittings that enhance performance fuel systems and protect high performance fuel filters."}],"keywords":["Fuel Filters","High Performance Filters","FST Filtration","Racing Fuel Systems","Ethanol Fuel Filters","Diesel Fuel Filtering","FloMax Filters","Water Separation System","Performance Fuel","TurboFyner System"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.fstperformance.com/#organization",
  "name": "Filter Solutions Technologies, LLC",
  "url": "https://www.fstperformance.com/",
  "brand": [
    {
      "@type": "Brand",
      "name": "FST Performance",
      "logo": "https://static.wixstatic.com/media/6f24fd_ffcc1ca20e48490abc3102a6fa98e534.png/v1/fill/w_980,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f24fd_ffcc1ca20e48490abc3102a6fa98e534.png"
    },
    {
      "@type": "Brand",
      "name": "FloMax"
    },
    {
      "@type": "Brand",
      "name": "TurboFyner"
    }
  ],
  "logo": "https://static.wixstatic.com/media/6f24fd_ffcc1ca20e48490abc3102a6fa98e534.png/v1/fill/w_980,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f24fd_ffcc1ca20e48490abc3102a6fa98e534.png",
  "image": [
    "https://static.wixstatic.com/media/6f24fd_ffcc1ca20e48490abc3102a6fa98e534.png/v1/fill/w_980,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f24fd_ffcc1ca20e48490abc3102a6fa98e534.png",
    "https://static.wixstatic.com/media/6f24fd_c818464c53fa4da58ed13b3c33dc552c.jpg/v1/fill/w_977,h_249,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f24fd_c818464c53fa4da58ed13b3c33dc552c.jpg"
  ],
  "description": "Manufacturer of ultra efficient high performance fuel filtration systems and fuel filters for automotive, marine, agricultural, racing and performance applications, including FloMax fuel filters and TurboFyner diesel fuel refining systems.",
  "email": "info@fstperformance.com",
  "telephone": "+1-407-323-0122",
  "sameAs": [
    "https://www.facebook.com/fstperformance"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-407-323-0122",
      "email": "info@fstperformance.com",
      "contactType": "customer service",
      "availableLanguage": [
        "en"
      ]
    }
  ],
  "foundingDate": "2010",
  "makesOffer": [
    {
      "@type": "Product",
      "name": "RPM300 Fuel Filter System",
      "url": "https://www.fstperformance.com/rpm300",
      "description": "Compact, high flow, low restriction FloMax fuel filter system that filters down to 4 microns for automotive and marine performance applications.",
      "brand": "FST Performance",
      "category": "Fuel filter system",
      "sku": "RPM300"
    },
    {
      "@type": "Product",
      "name": "RPM350 Fuel Filter System",
      "url": "https://www.fstperformance.com/rpm350",
      "description": "Compact, high flow, low restriction FloMax fuel filter system with clear anodized billet base, filtering down to 4 microns.",
      "brand": "FST Performance",
      "category": "Fuel filter system",
      "sku": "RPM350"
    },
    {
      "@type": "Product",
      "name": "RPM500 Fuel Filter System",
      "url": "https://www.fstperformance.com/rpm500",
      "description": "High capacity FloMax fuel filter system filtering down to 3 microns, ideal for marine and racing applications.",
      "brand": "FST Performance",
      "category": "Fuel filter system",
      "sku": "RPM500"
    },
    {
      "@type": "Product",
      "name": "RPM560 Big Deuce Dual Fuel Filter System",
      "url": "https://www.fstperformance.com/rpm560",
      "description": "Dual FloMax fuel filter system providing 3 micron filtration and very high flow for multiple engine offshore boats and high horsepower race engines.",
      "brand": "FST Performance",
      "category": "Fuel filter system",
      "sku": "RPM560"
    },
    {
      "@type": "Product",
      "name": "RPM700 Cartridge Fuel Filter System",
      "url": "https://www.fstperformance.com/rpm700",
      "description": "NASCAR-approved in-line FloMax cartridge fuel filter system filtering down to 4 microns and separating water.",
      "brand": "FST Performance",
      "category": "Fuel filter system",
      "sku": "RPM700"
    },
    {
      "@type": "Product",
      "name": "RPM900 TurboFyner Diesel Fuel Refiner & Filter System",
      "url": "https://www.fstperformance.com/rpm900",
      "description": "TurboFyner on-board diesel fuel refiner that filters to 3 microns, separates water and heats fuel while driving, ideal for diesel, biodiesel and vegetable oil fuels.",
      "brand": "FST Performance",
      "category": "Diesel fuel refining and filter system",
      "sku": "RPM900"
    },
    {
      "@type": "Product",
      "name": "TurboFyner On-Board Fuel Refining System",
      "url": "https://www.fstperformance.com/rpm900-turbofyner-system",
      "description": "On-board TurboFyner fuel refining system that heats fuel, separates water and provides 3 micron filtration in one compact billet unit.",
      "brand": "FST Performance",
      "category": "Diesel fuel refining and filter system"
    },
    {
      "@type": "Product",
      "name": "FGC500 Fuel Filter Grip & CatchCup",
      "url": "https://www.fstperformance.com/about-3-1",
      "description": "Compact PVC fuel filter grip and catch cup designed to aid removal of spin-on fuel filters and reduce fuel spillage.",
      "brand": "FST Performance",
      "category": "Fuel filter accessory",
      "sku": "FGC500"
    },
    {
      "@type": "Product",
      "name": "RFS300 Spin-on FilterShield",
      "url": "https://www.fstperformance.com/about-3-1",
      "description": "High temperature Lava Shield spin-on filter heatshield with MagnaMount magnets for FloMax RF500 spin-on filters.",
      "brand": "FST Performance",
      "category": "Fuel filter heatshield",
      "sku": "RFS300"
    },
    {
      "@type": "Product",
      "name": "RFS500 Spin-on FilterShield",
      "url": "https://www.fstperformance.com/about-3-1",
      "description": "High temperature Lava Shield spin-on filter heatshield with MagnaMount magnets for FloMax RF500M spin-on filters.",
      "brand": "FST Performance",
      "category": "Fuel filter heatshield",
      "sku": "RFS500"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();

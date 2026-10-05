/* @ds-bundle: {"format":4,"namespace":"ROFDesignSystem_d4b336","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Card","sourcePath":"components/editorial/Card.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"SectionHeading","sourcePath":"components/editorial/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/editorial/StatCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"StepCard","sourcePath":"components/flow/StepCard.jsx"},{"name":"StepProgress","sourcePath":"components/flow/StepProgress.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Badge","sourcePath":"components/labels/Badge.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"11f3eb37e6ce","components/core/IconButton.jsx":"c3a5a057a827","components/core/Logo.jsx":"e512e83882d4","components/core/TextLink.jsx":"835222d01e85","components/editorial/Card.jsx":"5f75ab5fbf5b","components/editorial/PullQuote.jsx":"b535f5d54085","components/editorial/SectionHeading.jsx":"0f73f6c16994","components/editorial/StatCard.jsx":"86a58c2dc976","components/feedback/Alert.jsx":"6fa0ac725f64","components/feedback/Modal.jsx":"d16c110909aa","components/flow/StepCard.jsx":"6b85ebf7297b","components/flow/StepProgress.jsx":"59dbacb5c777","components/forms/Checkbox.jsx":"cd312208915c","components/forms/Input.jsx":"d39dce49c0ba","components/forms/RadioGroup.jsx":"38e5569cc4ee","components/forms/Select.jsx":"66a7cec10735","components/forms/Switch.jsx":"6192f627a7ba","components/labels/Badge.jsx":"28a9ae21d1a8","components/labels/Tag.jsx":"2bdc3624bf7e","ui_kits/webwerf/Chrome.jsx":"da2920e4caef","ui_kits/webwerf/Home.jsx":"ba5bc2198a44","ui_kits/webwerf/Impak.jsx":"2706878ac33c","ui_kits/webwerf/Skenk.jsx":"221b1ee1102a","ui_kits/webwerf/Studente.jsx":"a5da6473bc73","ui_kits/webwerf/Vennote.jsx":"715452294171"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ROFDesignSystem_d4b336 = window.ROFDesignSystem_d4b336 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--weight-bold)",
  borderRadius: "var(--radius-pill)",
  border: "1.5px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "var(--transition-interactive)",
  minHeight: "var(--tap-min)"
};
const sizes = {
  sm: {
    fontSize: "13px",
    padding: "10px 18px",
    minHeight: "36px"
  },
  md: {
    fontSize: "15px",
    padding: "14px 26px"
  },
  lg: {
    fontSize: "17px",
    padding: "17px 34px"
  }
};
const variants = {
  primary: {
    background: "var(--surface-accent)",
    color: "var(--text-on-accent)"
  },
  secondary: {
    background: "var(--surface-inverse)",
    color: "var(--text-on-inverse)"
  },
  tertiary: {
    background: "transparent",
    color: "var(--text-strong)",
    borderColor: "var(--border-strong)"
  },
  inverse: {
    background: "var(--white)",
    color: "var(--accent)"
  }
};
const hovers = {
  primary: {
    background: "var(--accent-hover)"
  },
  secondary: {
    background: "var(--charcoal-800)"
  },
  tertiary: {
    background: "var(--surface-inverse)",
    color: "var(--text-on-inverse)"
  },
  inverse: {
    background: "var(--cream-100)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  fullWidth = false,
  iconAfter,
  onClick,
  type = "button",
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: "translateY(1px)"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      background: "var(--surface-disabled)",
      color: "var(--warm-300)",
      borderColor: "transparent",
      cursor: "not-allowed"
    } : null)
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, iconAfter ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, iconAfter) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  variant = "ghost",
  size = 44,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const palette = {
    ghost: {
      background: hover ? "var(--cream-300)" : "transparent",
      color: "var(--text-strong)",
      border: "1px solid transparent"
    },
    outline: {
      background: hover ? "var(--surface-inverse)" : "transparent",
      color: hover ? "var(--text-on-inverse)" : "var(--text-strong)",
      border: "1.5px solid var(--border-strong)"
    },
    accent: {
      background: hover ? "var(--accent-hover)" : "var(--surface-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      minWidth: "var(--tap-min)",
      minHeight: "var(--tap-min)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "var(--transition-interactive)",
      ...palette
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  variant = "colour",
  width = 120,
  withWordmark = false,
  assetBase = "./assets",
  href,
  ...rest
}) {
  const file = {
    colour: "rof-logo.png",
    white: "rof-logo-wit.png",
    black: "rof-logo-swart.png"
  }[variant];
  const img = /*#__PURE__*/React.createElement("img", {
    src: assetBase + "/" + file,
    alt: "Rapport Onderwysfonds",
    style: {
      width,
      height: "auto",
      display: "block"
    }
  });
  const body = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "8px"
    }
  }, img, withWordmark ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "10px",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-wordmark)",
      textTransform: "uppercase",
      color: variant === "white" ? "var(--text-on-inverse)" : "var(--text-strong)"
    }
  }, "Rapport Onderwysfonds") : null);
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "inline-flex"
    }
  }, rest), body) : /*#__PURE__*/React.createElement("span", rest, body);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  children,
  href = "#",
  withArrow = true,
  tone = "accent",
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === "accent" ? hover ? "var(--text-link-hover)" : "var(--text-link)" : hover ? "var(--accent)" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "15px",
      color,
      textDecoration: "none",
      borderBottom: `2px solid ${hover ? "currentColor" : "transparent"}`,
      paddingBottom: "2px",
      transition: "var(--transition-interactive)"
    }
  }, rest), children, withArrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  white: {
    background: "var(--surface-card)",
    color: "var(--text-strong)",
    border: "1px solid var(--border-default)"
  },
  cream: {
    background: "var(--surface-page-alt)",
    color: "var(--text-strong)",
    border: "1px solid var(--border-default)"
  },
  inverse: {
    background: "var(--surface-inverse)",
    color: "var(--text-on-inverse)",
    border: "1px solid var(--surface-inverse)"
  },
  accent: {
    background: "var(--surface-accent)",
    color: "var(--text-on-accent)",
    border: "1px solid var(--surface-accent)"
  }
};
function Card({
  children,
  surface = "white",
  padding = "var(--space-6)",
  media,
  mediaHeight = 180,
  mediaLabel,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      ...surfaces[surface],
      ...style
    }
  }, rest), media || mediaLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: mediaHeight,
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--cream-200)",
      backgroundImage: media ? undefined : "repeating-linear-gradient(135deg, rgba(196,30,42,0.09) 0 10px, transparent 10px 20px)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, media ? media : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, mediaLabel)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Card.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
function PullQuote({
  children,
  attribution,
  surface = "cream",
  size = "md"
}) {
  const surfaces = {
    cream: {
      background: "var(--surface-page-alt)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      border: "1px solid var(--surface-inverse)"
    },
    accent: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--surface-accent)"
    }
  }[surface];
  const fontSize = {
    sm: "22px",
    md: "30px",
    lg: "40px"
  }[size];
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      padding: "var(--space-6)",
      borderRadius: "var(--radius-md)",
      ...surfaces
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize,
      lineHeight: 1.24,
      letterSpacing: "var(--tracking-tight)"
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      opacity: 0.75
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeading.jsx
try { (() => {
function SectionHeading({
  number,
  title,
  meta,
  id,
  level = "h2"
}) {
  const Tag = level;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    style: {
      borderTop: "2px solid var(--border-strong)",
      paddingTop: "var(--space-5)",
      display: "flex",
      alignItems: "baseline",
      gap: "18px",
      flexWrap: "wrap"
    }
  }, number ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: "var(--accent)"
    }
  }, number) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-h2)",
      lineHeight: "var(--text-h2-lh)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0
    }
  }, title), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)",
      marginLeft: "auto"
    }
  }, meta) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  note,
  surface = "inverse",
  tone = "default"
}) {
  const surfaces = {
    inverse: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      border: "1px solid var(--surface-inverse)"
    },
    white: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)"
    },
    cream: {
      background: "var(--surface-page-alt)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)"
    },
    accent: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--surface-accent)"
    }
  }[surface];
  const labelColour = {
    default: surface === "inverse" ? "var(--rof-red-300)" : "var(--accent)",
    gold: "var(--gold-500)",
    muted: "var(--text-muted)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      ...surfaces
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "56px",
      lineHeight: 1,
      letterSpacing: "var(--tracking-heading)"
    }
  }, value), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      fontSize: "14.5px",
      lineHeight: 1.6,
      opacity: surface === "inverse" ? 0.8 : 1,
      color: surface === "inverse" ? "var(--warm-200)" : "var(--charcoal-600)"
    }
  }, note) : null), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: labelColour
    }
  }, label) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const tones = {
  info: {
    background: "var(--surface-page-alt)",
    border: "var(--border-default)",
    accent: "var(--charcoal-900)"
  },
  success: {
    background: "#F1F7F3",
    border: "#C9E0D3",
    accent: "var(--green-600)"
  },
  warning: {
    background: "#FBF5E6",
    border: "#EBDCB3",
    accent: "var(--gold-500)"
  },
  error: {
    background: "var(--accent-soft)",
    border: "var(--rof-red-100)",
    accent: "var(--danger-600)"
  }
};
function Alert({
  title,
  children,
  tone = "info",
  action
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: tone === "error" ? "alert" : "status",
    style: {
      background: t.background,
      border: "1px solid " + t.border,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-5)",
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 10,
      height: 10,
      flex: "none",
      marginTop: 6,
      borderRadius: "var(--radius-pill)",
      background: t.accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-black)",
      fontSize: "15px",
      marginBottom: "4px"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: "var(--charcoal-600)"
    }
  }, children)), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--scrim)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-5)",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-overlay)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "26px",
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Maak toe",
    onClick: onClose,
    style: {
      width: 36,
      height: 36,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      background: "var(--white)",
      cursor: "pointer",
      fontSize: "16px",
      color: "var(--text-strong)",
      lineHeight: 1
    }
  }, "\xD7") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      lineHeight: 1.65,
      color: "var(--charcoal-600)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/flow/StepCard.jsx
try { (() => {
function StepCard({
  step,
  title,
  children,
  total,
  current
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "18px"
    }
  }, step), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-black)",
      fontSize: "15px"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      lineHeight: 1.65,
      color: "var(--charcoal-600)"
    }
  }, children), total ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px"
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 4,
      flex: 1,
      borderRadius: 2,
      background: i < (current ?? step) ? "var(--accent)" : "var(--cream-300)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Stap ", current ?? step, " van ", total)) : null);
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/flow/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/flow/StepProgress.jsx
try { (() => {
function StepProgress({
  steps = [],
  current = 1,
  compact = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px"
    }
  }, steps.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: compact ? 3 : 4,
      flex: 1,
      borderRadius: 2,
      background: i < current ? "var(--accent)" : "var(--cream-300)"
    }
  }))), !compact ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Stap ", current, " van ", steps.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)"
    }
  }, steps[current - 1])) : null);
}
Object.assign(__ds_scope, { StepProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/flow/StepProgress.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  name,
  hint,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      minHeight: "var(--tap-min)",
      padding: "4px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      marginTop: 2,
      borderRadius: "var(--radius-xs)",
      border: "1.5px solid " + (checked ? "var(--accent)" : "var(--border-field)"),
      background: checked ? "var(--accent)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-interactive)"
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "14.5px",
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12.5px",
      color: "var(--text-muted)",
      marginTop: "4px"
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
  error,
  hint,
  required = false,
  disabled = false,
  multiline = false,
  rows = 4
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColour = error ? "var(--border-error)" : focus ? "var(--accent)" : "var(--border-field)";
  const fieldStyle = {
    width: "100%",
    background: error ? "var(--accent-soft)" : "var(--white)",
    border: "1.5px solid " + borderColour,
    borderRadius: "var(--radius-sm)",
    padding: "14px 16px",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    color: "var(--text-strong)",
    outline: "none",
    boxShadow: focus ? "var(--focus-ring)" : "none",
    transition: "var(--transition-interactive)",
    minHeight: multiline ? undefined : "var(--tap-min)",
    resize: multiline ? "vertical" : undefined
  };
  const Field = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "13px",
      fontWeight: "var(--weight-bold)",
      marginBottom: "7px",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement(Field, {
    name: name,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    "aria-invalid": Boolean(error),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12.5px",
      color: "var(--danger-600)",
      marginTop: "6px"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12.5px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  layout = "row"
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: "none",
      margin: 0,
      padding: 0
    }
  }, label ? /*#__PURE__*/React.createElement("legend", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--weight-bold)",
      marginBottom: "10px",
      padding: 0
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: layout === "row" ? "row" : "column",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    const note = typeof o === "string" ? null : o.note;
    const selected = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        flex: layout === "row" ? "1 1 140px" : "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        minHeight: "var(--tap-min)",
        justifyContent: "center",
        padding: "13px 18px",
        borderRadius: "var(--radius-sm)",
        border: "1.5px solid " + (selected ? "var(--accent)" : "var(--border-field)"),
        background: selected ? "var(--accent-soft)" : "var(--white)",
        transition: "var(--transition-interactive)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: selected,
      onChange: onChange,
      style: {
        position: "absolute",
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14.5px",
        fontWeight: selected ? "var(--weight-bold)" : "var(--weight-medium)",
        color: "var(--text-strong)"
      }
    }, text), note ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12.5px",
        color: "var(--text-muted)"
      }
    }, note) : null);
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Kies 'n opsie",
  name,
  error,
  hint,
  required = false,
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "13px",
      fontWeight: "var(--weight-bold)",
      marginBottom: "7px"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: "var(--tap-min)",
      background: "var(--white)",
      border: "1.5px solid " + (error ? "var(--border-error)" : focus ? "var(--accent)" : "var(--border-field)"),
      borderRadius: "var(--radius-sm)",
      padding: "13px 16px",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: value ? "var(--text-strong)" : "var(--warm-300)",
      outline: "none",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-interactive)",
      appearance: "none",
      backgroundImage: "linear-gradient(45deg, transparent 50%, var(--charcoal-900) 50%), linear-gradient(135deg, var(--charcoal-900) 50%, transparent 50%)",
      backgroundPosition: "calc(100% - 20px) calc(50% + 2px), calc(100% - 14px) calc(50% + 2px)",
      backgroundSize: "6px 6px, 6px 6px",
      backgroundRepeat: "no-repeat"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, text);
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12.5px",
      color: "var(--danger-600)",
      marginTop: "6px"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12.5px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  hint,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      minHeight: "var(--tap-min)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 48,
      height: 28,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--accent)" : "var(--cream-300)",
      border: "1px solid " + (checked ? "var(--accent)" : "var(--border-field)"),
      display: "inline-flex",
      alignItems: "center",
      padding: 3,
      transition: "var(--transition-interactive)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      transform: checked ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "14.5px",
      color: "var(--text-body)"
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12.5px",
      color: "var(--text-muted)"
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/labels/Badge.jsx
try { (() => {
const tones = {
  accent: {
    background: "var(--surface-accent)",
    color: "var(--text-on-accent)"
  },
  neutral: {
    background: "var(--cream-300)",
    color: "var(--charcoal-700)"
  },
  gold: {
    background: "var(--gold-500)",
    color: "var(--charcoal-900)"
  },
  success: {
    background: "var(--green-600)",
    color: "var(--white)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-strong)",
    boxShadow: "inset 0 0 0 1.5px var(--border-strong)"
  }
};
function Badge({
  children,
  tone = "neutral"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "7px 12px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/labels/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  href
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-sans)",
    fontSize: "13.5px",
    fontWeight: "var(--weight-semibold)",
    padding: "9px 16px",
    borderRadius: "var(--radius-pill)",
    cursor: onClick || href ? "pointer" : "default",
    textDecoration: "none",
    transition: "var(--transition-interactive)",
    background: selected ? "var(--surface-inverse)" : hover ? "var(--cream-300)" : "var(--surface-page-alt)",
    color: selected ? "var(--text-on-inverse)" : "var(--charcoal-600)",
    border: "1px solid " + (selected ? "var(--surface-inverse)" : "var(--border-default)")
  };
  const Comp = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Comp, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: style
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webwerf/Chrome.jsx
try { (() => {
(function () {
  /* Kop en voetskrif vir rof.org.za — die drie CTA's staan altyd in dieselfde orde. */
  const {
    Button,
    Logo,
    TextLink
  } = window.ROFDesignSystem_d4b336;
  const NAV = [{
    id: "tuis",
    label: "Tuis"
  }, {
    id: "studente",
    label: "Studente"
  }, {
    id: "skenk",
    label: "Skenk"
  }, {
    id: "vennote",
    label: "Vennote"
  }, {
    id: "impak",
    label: "Impak"
  }];
  function SiteHeader({
    page,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(244,240,232,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border-default)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "14px var(--container-pad)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("tuis");
      },
      style: {
        display: "inline-flex",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "colour",
      width: 86,
      assetBase: "../../assets"
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: "var(--space-5)",
        flexWrap: "wrap"
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(n.id);
      },
      style: {
        fontSize: "14px",
        fontWeight: "var(--weight-semibold)",
        color: page === n.id ? "var(--accent)" : "var(--charcoal-500)",
        borderBottom: "2px solid " + (page === n.id ? "var(--accent)" : "transparent"),
        paddingBottom: "2px"
      }
    }, n.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        marginLeft: "auto",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => onNavigate("studente")
    }, "Doen Aansoek"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => onNavigate("skenk")
    }, "Skenk Nou"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "tertiary",
      onClick: () => onNavigate("vennote")
    }, "Word 'n Vennoot"))));
  }
  function SiteFooter({
    onNavigate
  }) {
    const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "rgba(255,255,255,0.7)",
        marginBottom: "var(--space-4)"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "10px"
      }
    }, items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        color: "var(--white)",
        fontSize: "14px",
        opacity: 0.9
      }
    }, i))));
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--surface-accent)",
        color: "var(--white)",
        marginTop: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--container-pad)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      variant: "white",
      width: 120,
      assetBase: "../../assets"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "26px",
        lineHeight: 1.22,
        marginTop: "var(--space-5)"
      }
    }, "Vandag se student.", /*#__PURE__*/React.createElement("br", null), "M\xF4re se onderwyser.")), col("Studente", ["Wie kwalifiseer", "Aansoekproses", "Gereelde vrae"]), col("Ondersteun ROF", ["Skenk eenmalig", "Word 'n vriend", "Artikel 18A", "Word 'n vennoot"]), col("Oor ons", ["Wie is ons", "Trustees", "Jaarverslae", "Kontak"])), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-8)",
        paddingTop: "var(--space-5)",
        borderTop: "1px solid rgba(255,255,255,0.28)",
        display: "flex",
        gap: "var(--space-5)",
        flexWrap: "wrap",
        fontSize: "13px",
        opacity: 0.85
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Rapport Onderwysfonds \xB7 NPO 003-455 \xB7 PBO 930004538"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("skenk");
      },
      style: {
        color: "var(--white)"
      }
    }, "Bankbesonderhede"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        color: "var(--white)"
      }
    }, "Privaatheid")))));
  }
  function Page({
    children
  }) {
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--container-pad) 0"
      }
    }, children);
  }
  function Photo({
    label,
    height = 320,
    ratioTone = "red"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-default)",
        backgroundColor: "var(--cream-200)",
        backgroundImage: ratioTone === "red" ? "repeating-linear-gradient(135deg, rgba(196,30,42,0.09) 0 10px, transparent 10px 20px)" : "repeating-linear-gradient(135deg, rgba(28,27,25,0.07) 0 10px, transparent 10px 20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rof-label",
      style: {
        background: "var(--cream-100)",
        padding: "10px 16px"
      }
    }, label));
  }
  window.ROFChrome = {
    SiteHeader,
    SiteFooter,
    Page,
    Photo,
    NAV
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webwerf/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webwerf/Home.jsx
try { (() => {
(function () {
  /* Tuisblad: een boodskap, drie CTA's, impak, wie is ROF, studenteverhaal, donateur-oproep. */
  const {
    Button,
    Card,
    StatCard,
    PullQuote,
    SectionHeading,
    TextLink,
    Badge
  } = window.ROFDesignSystem_d4b336;
  const {
    Page,
    Photo
  } = window.ROFChrome;
  function Home({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
        gap: "var(--space-8)",
        alignItems: "center",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-5)"
      }
    }, "Sedert 2003 \xB7 Rapport Onderwysfonds"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "72px",
        lineHeight: 0.99,
        letterSpacing: "var(--tracking-display)",
        fontWeight: "var(--weight-black)",
        marginBottom: "var(--space-5)"
      }
    }, "Jou toekoms begin", /*#__PURE__*/React.createElement("br", null), "met ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--accent)"
      }
    }, "'n kans.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lead)",
        lineHeight: "var(--text-lead-lh)",
        color: "var(--charcoal-600)",
        maxWidth: "var(--measure-lead)",
        marginTop: 0,
        marginBottom: "var(--space-6)"
      }
    }, "ROF bel\xEA in verdienstelike toekomstige onderwysers met rentevrye leningsbeurse \u2014 en herbel\xEA elke terugbetaling in die volgende generasie."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "primary",
      onClick: () => onNavigate("studente")
    }, "Doen Aansoek"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      onClick: () => onNavigate("skenk")
    }, "Skenk Nou"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "tertiary",
      onClick: () => onNavigate("vennote")
    }, "Word 'n Vennoot")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 240 60",
      style: {
        width: 220,
        height: 54
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 46 C 60 50, 110 24, 176 12",
      fill: "none",
      stroke: "#C41E2A",
      strokeWidth: "4",
      strokeLinecap: "round",
      strokeDasharray: "14 12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M168 6 L182 12 L170 20",
      fill: "none",
      stroke: "#C41E2A",
      strokeWidth: "4",
      strokeLinecap: "round"
    })))), /*#__PURE__*/React.createElement(Photo, {
      label: "Studentefoto \xB7 3:4 \xB7 rooi trui",
      height: 520
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0,1fr))",
        gap: "var(--space-5)",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      value: "4 212",
      label: "Sedert 2003",
      note: "toekomstige onderwysers befonds.",
      surface: "inverse"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "R38m",
      label: "Bel\xEA in 2025",
      note: "in rentevrye leningsbeurse.",
      surface: "white"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "1 : 300",
      label: "Bereik",
      note: "leerders per onderwyser se loopbaan.",
      surface: "cream",
      tone: "gold"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "92%",
      label: "Terugbetaling",
      note: "van gegradueerdes betaal terug.",
      surface: "white"
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "01",
      title: "Wie is ROF?",
      meta: "Onafhanklik \xB7 nie-winsgewend \xB7 sedert 2003"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-5)",
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-3)"
      }
    }, "Wat ons doen"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15px",
        lineHeight: 1.65,
        color: "var(--charcoal-600)"
      }
    }, "Ons werf fondse, identifiseer verdienstelike studente en betaal befondsing direk aan hul universiteit.")), /*#__PURE__*/React.createElement(Card, {
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-3)"
      }
    }, "Hoe dit volhoubaar bly"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15px",
        lineHeight: 1.65,
        color: "var(--charcoal-600)"
      }
    }, "Gegradueerdes betaal terug sodra hulle werk. Elke rand word herbel\xEA in die volgende student.")), /*#__PURE__*/React.createElement(Card, {
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-3)"
      }
    }, "Wat jy kry"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15px",
        lineHeight: 1.65,
        color: "var(--charcoal-600)"
      }
    }, "Meetbare impak, Artikel 18A-belastingvoordele en kwartaallikse verslae oor jou belegging.")))), /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
        gap: "var(--space-6)",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      label: "Gegradueerde-portret \xB7 1:1",
      height: 360,
      ratioTone: "dark"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Studenteverhaal"), /*#__PURE__*/React.createElement(PullQuote, {
      surface: "cream",
      size: "lg",
      attribution: "Lerato M. \xB7 B.Ed. Grondslagfase \xB7 NWU"
    }, "\"Ek is die eerste in my familie wat gaan klaarmaak.\""), /*#__PURE__*/React.createElement(TextLink, {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("impak");
      }
    }, "Lees meer verhale"))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-inverse)",
        color: "var(--text-on-inverse)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-8)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
        gap: "var(--space-7)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "44px",
        lineHeight: 1.06,
        color: "var(--white)",
        marginBottom: "var(--space-4)"
      }
    }, "Wanneer jy in 'n toekomstige onderwyser bel\xEA, bel\xEA jy in Suid-Afrika se toekoms."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "16px",
        lineHeight: 1.65,
        color: "var(--warm-200)",
        maxWidth: "56ch"
      }
    }, "R500 per maand dek 'n jaar se handboeke vir een student. Jou bydrae is Artikel 18A-aftrekbaar.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "primary",
      fullWidth: true,
      onClick: () => onNavigate("skenk")
    }, "Skenk Nou"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "inverse",
      fullWidth: true,
      onClick: () => onNavigate("vennote")
    }, "Word 'n Vennoot")))));
  }
  window.ROFScreens = Object.assign(window.ROFScreens || {}, {
    Home
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webwerf/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webwerf/Impak.jsx
try { (() => {
(function () {
  /* Impak & verhale: filters, verhaalkaarte, jaarverslae, nuusbrief. */
  const {
    Button,
    Card,
    Tag,
    SectionHeading,
    StatCard,
    PullQuote,
    TextLink,
    Input,
    Badge
  } = window.ROFDesignSystem_d4b336;
  const {
    Page,
    Photo
  } = window.ROFChrome;
  const VERHALE = [{
    tag: "Studenteverhale",
    titel: "Van ROF-student na Graad 3-onderwyser.",
    meta: "Lerato M. · NWU · 2024",
    media: "Gegradueerde-portret"
  }, {
    tag: "Studenteverhale",
    titel: "Twee jaar se klasgeld, 'n leeftyd se werk.",
    meta: "Jandré P. · US · 2023",
    media: "Klaskamerfoto"
  }, {
    tag: "Vennootskappe",
    titel: "Hoe 'n vennoot tien studente 'n jaar befonds.",
    meta: "Korporatiewe vennoot · 2025",
    media: "Vennootskap-oomblik"
  }, {
    tag: "Verslae",
    titel: "Jaarverslag 2025: waarheen elke rand gegaan het.",
    meta: "Finansiële verslag · PDF",
    media: "Verslag-omslag"
  }, {
    tag: "Veldtogte",
    titel: "Onderwysersdag: dankie aan 4 212 onderwysers.",
    meta: "Veldtog · Oktober 2025",
    media: "Veldtogbeeld"
  }, {
    tag: "Studenteverhale",
    titel: "Eerste in haar familie met 'n graad.",
    meta: "Nomsa D. · UV · 2022",
    media: "Studenteportret"
  }];
  function Impak() {
    const [filter, setFilter] = React.useState("Alles");
    const filters = ["Alles", "Studenteverhale", "Vennootskappe", "Verslae", "Veldtogte"];
    const sigbaar = filter === "Alles" ? VERHALE : VERHALE.filter(v => v.tag === filter);
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Impak"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "62px",
        lineHeight: 1.02,
        letterSpacing: "var(--tracking-display)",
        fontWeight: "var(--weight-black)",
        margin: "var(--space-5) 0",
        maxWidth: "22ch"
      }
    }, "Elke onderwyser verander ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--accent)"
      }
    }, "honderde lewens.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0,1fr))",
        gap: "var(--space-5)",
        marginTop: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      value: "4 212",
      label: "Sedert 2003",
      note: "toekomstige onderwysers befonds.",
      surface: "inverse"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "1.2m",
      label: "Leerders",
      note: "bereik deur ROF-gegradueerdes.",
      surface: "cream",
      tone: "gold"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "14",
      label: "Instellings",
      note: "vennootskappe landwyd.",
      surface: "white"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "92%",
      label: "Terugbetaling",
      note: "hou die fonds volhoubaar.",
      surface: "white"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "01",
      title: "Verhale en verslae",
      meta: sigbaar.length + " items"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        flexWrap: "wrap",
        margin: "var(--space-6) 0"
      }
    }, filters.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      selected: filter === t,
      onClick: () => setFilter(t)
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: "var(--space-5)"
      }
    }, sigbaar.map(v => /*#__PURE__*/React.createElement(Card, {
      key: v.titel,
      mediaLabel: v.media,
      mediaHeight: 170
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-3)"
      }
    }, v.tag), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "21px",
        lineHeight: 1.3,
        marginBottom: "var(--space-3)"
      }
    }, v.titel), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "13px",
        color: "var(--text-muted)",
        marginBottom: "var(--space-4)"
      }
    }, v.meta), /*#__PURE__*/React.createElement(TextLink, {
      href: "#"
    }, "Lees verder"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
        gap: "var(--space-6)",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(PullQuote, {
      surface: "accent",
      size: "lg",
      attribution: "Boodskap-pilaar \xB7 verander lewens deur onderwys"
    }, "Elke onderwyser wat ons ondersteun, verander honderde lewens."), /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      padding: "var(--space-7)"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-4)"
      }
    }, "Nuusbrief"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "26px",
        lineHeight: 1.25,
        marginBottom: "var(--space-4)"
      }
    }, "Een e-pos per kwartaal. Net impak, geen ruis."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "E-posadres",
      type: "email",
      placeholder: "jy@voorbeeld.co.za"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Skryf in")))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: "var(--space-5)"
      }
    }, ["Jaarverslag 2025", "Jaarverslag 2024", "Geouditeerde finansies 2025"].map(v => /*#__PURE__*/React.createElement(Card, {
      key: v,
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--navy-800)"
      }
    }, "PDF"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "var(--weight-bold)",
        fontSize: "15px",
        flex: 1
      }
    }, v), /*#__PURE__*/React.createElement(TextLink, {
      href: "#",
      withArrow: false,
      tone: "neutral"
    }, "Laai af")))))));
  }
  window.ROFScreens = Object.assign(window.ROFScreens || {}, {
    Impak
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webwerf/Impak.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webwerf/Skenk.jsx
try { (() => {
(function () {
  /* Skenk: bedrag kies, frekwensie, Artikel 18A, modaal-bevestiging. */
  const {
    Button,
    Card,
    RadioGroup,
    Input,
    Checkbox,
    Switch,
    Modal,
    PullQuote,
    SectionHeading,
    StatCard,
    Badge
  } = window.ROFDesignSystem_d4b336;
  const {
    Page,
    Photo
  } = window.ROFChrome;
  function Skenk() {
    const [freq, setFreq] = React.useState("maand");
    const [bedrag, setBedrag] = React.useState("500");
    const [anon, setAnon] = React.useState(false);
    const [belasting, setBelasting] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-8)",
        alignItems: "center",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Artikel 18A"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "60px",
        lineHeight: 1.02,
        letterSpacing: "var(--tracking-display)",
        fontWeight: "var(--weight-black)",
        margin: "var(--space-5) 0"
      }
    }, "Jou belegging.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--accent)"
      }
    }, "M\xF4re se onderwysers.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lead)",
        lineHeight: 1.6,
        color: "var(--charcoal-600)",
        maxWidth: "var(--measure-lead)",
        margin: 0
      }
    }, "Elke rand wat jy skenk word uitbetaal, terugbetaal en weer bel\xEA. Dit is nie 'n eenmalige geskenk nie \u2014 dit is 'n fonds wat aanhou werk.")), /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      padding: "var(--space-7)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(RadioGroup, {
      name: "frekwensie",
      label: "Hoe wil jy skenk?",
      value: freq,
      onChange: e => setFreq(e.target.value),
      options: [{
        value: "een",
        label: "Eenmalig"
      }, {
        value: "maand",
        label: "Maandeliks",
        note: "Meeste impak"
      }, {
        value: "erf",
        label: "Erflating"
      }]
    }), /*#__PURE__*/React.createElement(RadioGroup, {
      name: "bedrag",
      label: "Bedrag",
      value: bedrag,
      onChange: e => setBedrag(e.target.value),
      options: [{
        value: "250",
        label: "R250"
      }, {
        value: "500",
        label: "R500",
        note: "Handboeke vir 'n jaar"
      }, {
        value: "1500",
        label: "R1 500"
      }, {
        value: "ander",
        label: "Ander"
      }]
    }), bedrag === "ander" ? /*#__PURE__*/React.createElement(Input, {
      label: "Jou bedrag",
      placeholder: "R",
      type: "number"
    }) : null, /*#__PURE__*/React.createElement(Input, {
      label: "E-posadres",
      type: "email",
      hint: "Ons stuur jou Artikel 18A-sertifikaat hierheen.",
      required: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Stuur my ROF se kwartaallikse impakverslag.",
      checked: belasting,
      onChange: e => setBelasting(e.target.checked)
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Maak my skenking anoniem",
      checked: anon,
      onChange: setAnon
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "primary",
      fullWidth: true,
      onClick: () => setOpen(true)
    }, freq === "maand" ? "Skenk R" + bedrag + " per maand" : "Skenk R" + bedrag)))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "01",
      title: "Wat jou bydrae doen",
      meta: "Verifieerbare, gepubliseerde syfers"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: "var(--space-5)",
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      value: "R500",
      label: "Per maand",
      note: "dek een student se handboeke vir 'n jaar.",
      surface: "cream"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "R38 000",
      label: "Per student",
      note: "is die gemiddelde jaarlikse leningsbeurs.",
      surface: "inverse"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "92%",
      label: "Terugbetaal",
      note: "van gegradueerdes betaal hul lening terug.",
      surface: "white",
      tone: "gold"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-6)",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(PullQuote, {
      surface: "inverse",
      size: "md",
      attribution: "Anna V. \xB7 donateur sedert 2014"
    }, "\"Ek gee nie geld weg nie \u2014 ek bel\xEA dit in 'n onderwyser wat 300 kinders gaan leer.\""), /*#__PURE__*/React.createElement(Photo, {
      label: "Donateur-oomblik \xB7 3:2",
      height: 300,
      ratioTone: "dark"
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--gold-500)",
        marginBottom: "var(--space-3)"
      }
    }, "Artikel 18A"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "14.5px",
        lineHeight: 1.65,
        color: "var(--charcoal-600)"
      }
    }, "ROF is 'n geregistreerde openbare weldaadsorganisasie (PBO 930004538). Jou skenking is belastingaftrekbaar en jy ontvang 'n sertifikaat.")), /*#__PURE__*/React.createElement(Card, {
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-3)"
      }
    }, "Word 'n vriend van ROF"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "14.5px",
        lineHeight: 1.65,
        color: "var(--charcoal-600)"
      }
    }, "R500 per maand, 'n kwartaallikse impakverslag en 'n uitnodiging na die jaarlikse Erkenningsdag.")), /*#__PURE__*/React.createElement(Card, {
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        marginBottom: "var(--space-3)"
      }
    }, "Bankbesonderhede"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        lineHeight: 1.8,
        color: "var(--charcoal-700)"
      }
    }, "Rapport Onderwysfonds", /*#__PURE__*/React.createElement("br", null), "Rek. 000 000 000", /*#__PURE__*/React.createElement("br", null), "Takkode 000 000", /*#__PURE__*/React.createElement("br", null), "Verw: jou naam")))), /*#__PURE__*/React.createElement(Modal, {
      open: open,
      title: "Bevestig jou skenking",
      onClose: () => setOpen(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onClick: () => setOpen(false)
      }, "Gaan na betaling"), /*#__PURE__*/React.createElement(Button, {
        variant: "tertiary",
        onClick: () => setOpen(false)
      }, "Kanselleer"))
    }, "Jy skenk ", /*#__PURE__*/React.createElement("strong", null, "R", bedrag), " ", freq === "maand" ? "per maand" : freq === "erf" ? "as erflating" : "eenmalig", ". Jy ontvang 'n Artikel 18A-sertifikaat per e-pos", anon ? " en jou naam word nie gepubliseer nie" : "", "."));
  }
  window.ROFScreens = Object.assign(window.ROFScreens || {}, {
    Skenk
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webwerf/Skenk.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webwerf/Studente.jsx
try { (() => {
(function () {
  /* Studente: kwalifikasie, stap 1–8, aansoekvorm, GV. */
  const {
    Button,
    Card,
    StepCard,
    StepProgress,
    SectionHeading,
    Input,
    Select,
    Checkbox,
    Alert,
    Badge
  } = window.ROFDesignSystem_d4b336;
  const {
    Page,
    Photo
  } = window.ROFChrome;
  const STAPPE = [["Kyk of jy kwalifiseer", "Suid-Afrikaanse burger, aanvaar vir 'n B.Ed. of PGCE, en akademies verdienstelik."], ["Skep jou profiel", "Registreer aanlyn met jou ID-nommer en e-posadres."], ["Laai jou dokumente", "ID, matriekuitslae, universiteitsaanvaarding en bewys van inkomste."], ["Voltooi die aansoek", "Vertel ons waarom jy onderwys wil gee — 300 woorde is genoeg."], ["Ons keur en onderhou", "Ons paneel evalueer akademiese meriete en behoefte."], ["Jou aanbod", "Jy ontvang jou leningsbeurs-aanbod en die terugbetalingsooreenkoms."], ["Na goedkeuring", "Geld word direk aan jou universiteit betaal en jy voltooi jou studies."], ["Betaal terug, gee aan", "Jy begin terugbetaal sodra jy werk — en befonds die volgende student."]];
  function Studente({
    onNavigate
  }) {
    const [step, setStep] = React.useState(1);
    const [instelling, setInstelling] = React.useState("");
    const [ok, setOk] = React.useState(false);
    const [gestuur, setGestuur] = React.useState(false);
    const stapname = ["Jou besonderhede", "Studie", "Dokumente", "Bevestig"];
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
        gap: "var(--space-8)",
        alignItems: "center",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "Aansoeke oop"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "60px",
        lineHeight: 1.02,
        letterSpacing: "var(--tracking-display)",
        fontWeight: "var(--weight-black)",
        margin: "var(--space-5) 0"
      }
    }, "Word een van m\xF4re se ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--accent)"
      }
    }, "onderwysers.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lead)",
        lineHeight: 1.6,
        color: "var(--charcoal-600)",
        maxWidth: "var(--measure-lead)",
        marginTop: 0,
        marginBottom: "var(--space-6)"
      }
    }, "'n ROF-leningsbeurs is rentevry. Jy betaal eers terug wanneer jy werk \u2014 en jou terugbetaling befonds die volgende student."), /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: "Aansoeke vir 2027 sluit 30 September 2026"
    }, "Onvolledige aansoeke word nie oorweeg nie.")), /*#__PURE__*/React.createElement(Photo, {
      label: "Studentefoto \xB7 klaskamer",
      height: 430
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "01",
      title: "Wie kwalifiseer?",
      meta: "Vier vereistes"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0,1fr))",
        gap: "var(--space-5)",
        marginTop: "var(--space-6)"
      }
    }, [["Burgerskap", "Suid-Afrikaanse burger met 'n geldige ID."], ["Studierigting", "Aanvaar vir 'n B.Ed. of PGCE by 'n erkende instelling."], ["Meriete", "Sterk akademiese rekord en 'n duidelike roeping vir onderwys."], ["Behoefte", "Aantoonbare finansiële behoefte aan ondersteuning."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      surface: "white"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-black)",
        fontSize: "15px",
        marginBottom: "var(--space-2)"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "14px",
        lineHeight: 1.6,
        color: "var(--charcoal-600)"
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "02",
      title: "Die aansoekproses",
      meta: "Agt stappe"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0,1fr))",
        gap: "var(--space-5)",
        marginTop: "var(--space-6)"
      }
    }, STAPPE.map(([t, d], i) => /*#__PURE__*/React.createElement(StepCard, {
      key: t,
      step: i + 1,
      title: t,
      total: 8,
      current: i + 1
    }, d)))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "03",
      title: "Doen aansoek",
      meta: "Neem sowat 15 minute"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
        gap: "var(--space-6)",
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      padding: "var(--space-7)"
    }, gestuur ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Aansoek ontvang"
    }, "Ons kontak jou binne 14 dae by die e-posadres wat jy verskaf het.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(StepProgress, {
      steps: stapname,
      current: step
    }), step === 1 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Volle naam",
      placeholder: "Naam en van",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "ID-nommer",
      placeholder: "13 syfers",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "E-posadres",
      type: "email",
      hint: "Ons stuur jou aansoekstatus hierheen.",
      required: true
    })) : null, step === 2 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Instelling",
      value: instelling,
      onChange: e => setInstelling(e.target.value),
      options: ["Noordwes-Universiteit", "Universiteit Stellenbosch", "Universiteit van Pretoria", "Universiteit van die Vrystaat", "UNISA"],
      error: !instelling ? "Hierdie veld is verpligtend." : undefined,
      required: true
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Studierigting",
      options: ["B.Ed. Grondslagfase", "B.Ed. Intermediêre fase", "B.Ed. Senior fase", "PGCE"],
      required: true
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Studiejaar in 2027",
      options: ["Eerstejaar", "Tweedejaar", "Derdejaar", "Vierdejaar"],
      required: true
    })) : null, step === 3 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, ["ID-dokument", "Matriekuitslae", "Bewys van universiteitsaanvaarding", "Bewys van huishoudelike inkomste"].map(d => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        border: "1.5px dashed var(--warm-200)",
        borderRadius: "var(--radius-sm)",
        padding: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14.5px",
        fontWeight: "var(--weight-semibold)",
        flex: 1
      }
    }, d), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "tertiary"
    }, "Laai op")))) : null, step === 4 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Waarom wil jy onderwys gee?",
      multiline: true,
      rows: 5,
      placeholder: "Sowat 300 woorde"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Ek stem in tot ROF se voorwaardes en die terugbetalingsooreenkoms.",
      checked: ok,
      onChange: e => setOk(e.target.checked)
    })) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        flexWrap: "wrap"
      }
    }, step > 1 ? /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      onClick: () => setStep(step - 1)
    }, "Terug") : null, step < 4 ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setStep(step + 1)
    }, "Gaan voort") : /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: !ok,
      onClick: () => setGestuur(true)
    }, "Dien aansoek in")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-5)",
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      surface: "cream"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: "var(--accent)",
        marginBottom: "var(--space-3)"
      }
    }, "Gereelde vrae"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, [["Is daar rente?", "Nee. Die leningsbeurs is heeltemal rentevry."], ["Wanneer begin ek terugbetaal?", "Sodra jy voltyds werk, teen 'n bedrag wat by jou salaris pas."], ["Dek dit koshuis?", "Befondsing dek klasgeld en handboeke; koshuis word per geval oorweeg."]].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        borderTop: "1px solid var(--border-soft)",
        paddingTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-black)",
        fontSize: "14.5px",
        marginBottom: "4px"
      }
    }, q), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "13.5px",
        lineHeight: 1.6,
        color: "var(--charcoal-600)"
      }
    }, a))))), /*#__PURE__*/React.createElement(Card, {
      surface: "accent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "24px",
        lineHeight: 1.25,
        marginBottom: "var(--space-4)"
      }
    }, "Nog vrae oor jou aansoek?"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      onClick: () => onNavigate("tuis")
    }, "Kontak ons"))))));
  }
  window.ROFScreens = Object.assign(window.ROFScreens || {}, {
    Studente
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webwerf/Studente.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webwerf/Vennote.jsx
try { (() => {
(function () {
  /* Korporatiewe vennote: CSI/ESG-boodskap, vennootskapsmodel, verslae, kontak. */
  const {
    Button,
    Card,
    SectionHeading,
    StatCard,
    Input,
    Select,
    Badge,
    PullQuote,
    Alert
  } = window.ROFDesignSystem_d4b336;
  const {
    Page,
    Photo
  } = window.ROFChrome;
  function Vennote() {
    const [gestuur, setGestuur] = React.useState(false);
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
        gap: "var(--space-8)",
        alignItems: "center",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "outline"
    }, "CSI & ESG"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "58px",
        lineHeight: 1.03,
        letterSpacing: "var(--tracking-display)",
        fontWeight: "var(--weight-black)",
        margin: "var(--space-5) 0"
      }
    }, "Saam bou ons 'n sterker ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--accent)"
      }
    }, "onderwysstelsel.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lead)",
        lineHeight: 1.6,
        color: "var(--charcoal-600)",
        maxWidth: "var(--measure-lead)",
        marginTop: 0,
        marginBottom: "var(--space-6)"
      }
    }, "ROF gee korporatiewe vennote 'n meetbare, ouditeerbare onderwysbelegging met jaarlikse impakverslae en B-BBEE-erkenning vir maatskaplike ontwikkeling."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "primary"
    }, "Word 'n Vennoot"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "tertiary"
    }, "Laai impakverslag af"))), /*#__PURE__*/React.createElement(Photo, {
      label: "Vennootskap-oomblik \xB7 4:3",
      height: 400,
      ratioTone: "dark"
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "01",
      title: "Die vennootskapsmodel",
      meta: "Drie vlakke"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: "var(--space-5)",
        marginTop: "var(--space-6)"
      }
    }, [["Ondersteuner", "R100 000 p.j.", ["Twee studente befonds", "Jaarlikse impakverslag", "Artikel 18A-sertifikaat"]], ["Vennoot", "R500 000 p.j.", ["Tien studente befonds", "Kwartaallikse verslae", "Erkenning op alle kanale", "Uitnodiging na Erkenningsdag"]], ["Stigtersvennoot", "R1m+ p.j.", ["Beursprogram in jou naam", "Toegang tot gegradueerde-poel", "Gesamentlike mediaveldtogte", "Trustee-briefing twee keer per jaar"]]].map(([naam, prys, punte], i) => /*#__PURE__*/React.createElement(Card, {
      key: naam,
      surface: i === 1 ? "inverse" : "white"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rof-label",
      style: {
        color: i === 1 ? "var(--rof-red-300)" : "var(--accent)",
        marginBottom: "var(--space-3)"
      }
    }, naam), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "34px",
        lineHeight: 1,
        marginBottom: "var(--space-5)"
      }
    }, prys), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "10px",
        fontSize: "14px",
        lineHeight: 1.55,
        color: i === 1 ? "var(--warm-200)" : "var(--charcoal-600)"
      }
    }, punte.map(p => /*#__PURE__*/React.createElement("div", {
      key: p
    }, "\xB7 ", p))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "02",
      title: "Wat ons rapporteer",
      meta: "Ouditeerbaar, kwartaalliks"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0,1fr))",
        gap: "var(--space-5)",
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      value: "100%",
      label: "Toewysing",
      note: "van vennootfondse gaan direk na studiegeld.",
      surface: "white"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "14",
      label: "Instellings",
      note: "vennootskappe met universiteite landwyd.",
      surface: "cream"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "R38m",
      label: "Bel\xEA in 2025",
      note: "in rentevrye leningsbeurse.",
      surface: "inverse"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: "21 jaar",
      label: "Rekord",
      note: "van onafhanklike befondsing sedert 2003.",
      surface: "white",
      tone: "gold"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-6)",
        paddingBottom: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(PullQuote, {
      surface: "cream",
      size: "md",
      attribution: "Boodskap-pilaar \xB7 vertroude bestuur"
    }, "Jou belegging word verantwoordelik bestuur en lewer meetbare impak."), /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      padding: "var(--space-7)"
    }, gestuur ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Dankie \u2014 ons kontak jou"
    }, "'n Lid van die ROF-span skakel binne twee werksdae met jou oor 'n vennootskapsgesprek.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-black)",
        fontSize: "16px"
      }
    }, "Kom ons gesels"), /*#__PURE__*/React.createElement(Input, {
      label: "Maatskappy",
      placeholder: "Naam van die organisasie",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Kontakpersoon",
      placeholder: "Naam en van",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "E-posadres",
      type: "email",
      required: true
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Belangstelling",
      options: ["Ondersteuner", "Vennoot", "Stigtersvennoot", "Nog nie seker nie"]
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setGestuur(true)
    }, "Stuur navraag")))));
  }
  window.ROFScreens = Object.assign(window.ROFScreens || {}, {
    Vennote
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webwerf/Vennote.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.StepProgress = __ds_scope.StepProgress;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

})();

// ============================================
//  POOMAGOTCHI — home screen widget 💗
//  For the Scriptable app (free, App Store)
//  Setup: edit the two lines below, that's it
// ============================================
const RETURN_DATE = "2026-08-25";   // the day she comes home
const HER_NAME    = "Pookie";       // what you call her
const ANNIVERSARY = "2025-04-04";   // your first day together

const now = new Date();
const target = new Date(RETURN_DATE + "T00:00:00");
const days = Math.max(0, Math.ceil((target - now) / 86400000));
const together = Math.floor((now - new Date(ANNIVERSARY + "T00:00:00")) / 86400000) + 1;

const w = new ListWidget();
const grad = new LinearGradient();
grad.colors = [new Color("#FFE9F0"), new Color("#FFF1DE")];
grad.locations = [0, 1];
w.backgroundGradient = grad;
w.setPadding(14, 16, 14, 16);

const top = w.addText(days > 0 ? `${HER_NAME.toUpperCase()} COMES HOME IN` : "SHE'S HOME!! 🎉");
top.font = Font.heavySystemFont(10);
top.textColor = new Color("#E25E82");
w.addSpacer(6);

const row = w.addStack();
row.bottomAlignContent();
const big = row.addText(String(days));
big.font = Font.heavySystemFont(46);
big.textColor = new Color("#E25E82");
row.addSpacer(5);
const unit = row.addText(days === 1 ? "day 💗" : "days 💗");
unit.font = Font.boldSystemFont(15);
unit.textColor = new Color("#C99AA9");

w.addSpacer(8);
const foot = w.addText(`together ${together} days 🌱`);
foot.font = Font.mediumSystemFont(11);
foot.textColor = new Color("#A3928A");

// refresh roughly every hour
w.refreshAfterDate = new Date(Date.now() + 60 * 60 * 1000);

if (config.runsInWidget) { Script.setWidget(w); }
else { w.presentSmall(); }
Script.complete();

// const middleware = (req, res, next) => {
//     const gameName = req.params.game_name;
//     console.log(gameName);
//     let data = {};
//     switch (gameName) {
//         case "fifa":
//             data = {
//                 gameName,
//                 title: "피파온라인 4",
//             };
//             next();
//             break;
//         case "maple":
//             data = {
//                 gameName,
//                 title: "메이플스토리",
//             };
//             next();
//             break;
//         case "riniji":
//             data = {
//                 gameName,
//                 title: "리니지",
//             };
//             console.log(data);
//             next();
//             break;
//         default:
//             res.redirect("/community_hub");
//             break;
//     }
// };

// module.exports = middleware;

import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './menew.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `   
 ╭━     🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 🍓
 ┃➤
 ┃➤    𝗛ola, ${taguser}
 ┃➤
 ┃➤ 𝐃𝐮𝐞𝐧̃𝐚 : 𝐆𝐳𝐒𝐭𝐨𝐩𝐨𝐫 🍓
 ┃➤ Nᴜᴍᴇʀᴏ wa.me/5218683477820
 ┃➤ Fᴇᴄʜᴀ : ${date}
 ╰━━━━━━━━━━━━━
  
 ╭━      🍓 𝑰𝒏𝒇𝒐 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 🍓
 ┃➤ ${usedPrefix}listagrupos
 ┃➤ ${usedPrefix}estado
 ┃➤ ${usedPrefix}creador
 ┃➤ ${usedPrefix}velocidad
 ╰━━━━━━━━━━━━━

 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑱𝒖𝒆𝒈𝒐𝒔 🍓
 ┃➤ ${usedPrefix}mates | matemáticas | math
 ┃➤ ${usedPrefix}lanzar *cara* | *cruz*
 ┃➤ ${usedPrefix}ppt *piedra : papel : tijera*
 ┃➤ ${usedPrefix}tictactoe | ttt *sala*
 ┃➤ ${usedPrefix}deltictactoe | delttt
 ┃➤ ${usedPrefix}topgays
 ┃➤ ${usedPrefix}fake
 ┃➤ ${usedPrefix}toppajer@s
 ┃➤ ${usedPrefix}topput@s
 ┃➤ ${usedPrefix}topintegrantes | topintegrante
 ┃➤ ${usedPrefix}toplagrasa | topgrasa
 ┃➤ ${usedPrefix}toppanasfrescos | toppanafresco
 ┃➤ ${usedPrefix}topshiposters | topshipost
 ┃➤ ${usedPrefix}toplindos | toplind@s
 ┃➤ ${usedPrefix}topfamosos | topfamos@s
 ┃➤ ${usedPrefix}topparejas | top5parejas
 ┃➤ ${usedPrefix}gay | gay *@tag*
 ┃➤ ${usedPrefix}gay2 *nombre : @tag*
 ┃➤ ${usedPrefix}lesbiana *nombre : @tag*
 ┃➤ ${usedPrefix}lesbi1 *nombre : @tag*
 ┃➤ ${usedPrefix}manca *nombre : @tag*
 ┃➤ ${usedPrefix}manco *nombre : @tag*
 ┃➤ ${usedPrefix}pajero *nombre : @tag*
 ┃➤ ${usedPrefix}pajera *nombre : @tag*
 ┃➤ ${usedPrefix}puto *nombre : @tag*
 ┃➤ ${usedPrefix}puta *nombre : @tag*
 ┃➤ ${usedPrefix}rata *nombre : @tag*
 ┃➤ ${usedPrefix}love *nombre : @tag*
 ┃➤ ${usedPrefix}doxear *nombre : @tag*
 ┃➤ ${usedPrefix}doxxeame
 ┃➤ ${usedPrefix}pregunta *texto*
 ┃➤ ${usedPrefix}apostar | slot *cantidad*
 ┃➤ ${usedPrefix}formarpareja
 ┃➤ ${usedPrefix}dado
 ┃➤ ${usedPrefix}verdad
 ┃➤ ${usedPrefix}acertijo
 ┃➤ ${usedPrefix}cancion
 ┃➤ ${usedPrefix}trivia
 ┃➤ ${usedPrefix}pelicula
 ┃➤ ${usedPrefix}adivinanza
 ┃➤ ${usedPrefix}reto
 ┃➤ ${usedPrefix}ruleta
 ┃➤ ${usedPrefix}suerte
 ╰━━━━━━━━━━━━━

 ╭━   🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑨𝒖𝒔𝒕𝒆𝒔 𝑫𝒆𝒍 𝑮𝒓𝒖𝒑𝒐  🍓
 ┃➤ ${usedPrefix}enable *o* disable *bienvenida | welcome*
 ┃➤ ${usedPrefix}enable *o* disable *avisos | detect*
 ┃➤ ${usedPrefix}enable *o* disable *autonivel | autolevelup*
 ┃➤ ${usedPrefix}enable *o* disable *restringir | restrict*
 ┃➤ ${usedPrefix}enable *o* disable *antillamar | anticall*
 ┃➤ ${usedPrefix}enable *o* disable *publico | public*
 ┃➤ ${usedPrefix}enable *o* disable *autovisto | autoread*
 ┃➤ ${usedPrefix}enable *o* disable *temporal*
 ┃➤ ${usedPrefix}enable *o* disable *stickers*
 ┃➤ ${usedPrefix}enable *o* disable *autosticker*
 ┃➤ ${usedPrefix}enable *o* disable *reacciones | reaction*
 ┃➤ ${usedPrefix}enable *o* disable *audios*
 ┃➤ ${usedPrefix}enable *o* disable *modocaliente | modohorny*
 ┃➤ ${usedPrefix}enable *o* disable *antitoxicos | antitoxic*
 ┃➤ ${usedPrefix}enable *o* disable *antiver | antiviewonce*
 ┃➤ ${usedPrefix}enable *o* disable *antieliminar | antidelete*
 ┃➤ ${usedPrefix}enable *o* disable *antinternacional | antifake*
 ┃➤ ${usedPrefix}enable *o* disable *antienlace | antilink*
 ┃➤ ${usedPrefix}enable *o* disable *antienlace2 | antilink2*
 ┃➤ ${usedPrefix}enable *o* disable *antitiktok | antitk*
 ┃➤ ${usedPrefix}enable *o* disable *antiyoutube | antiyt*
 ┃➤ ${usedPrefix}enable *o* disable *antitelegram | antitel*
 ┃➤ ${usedPrefix}enable *o* disable *antifacebook | antifb*
 ┃➤ ${usedPrefix}enable *o* disable *antinstagram | antig*
 ┃➤ ${usedPrefix}enable *o* disable *antitwitter | antitw*
 ┃➤ ${usedPrefix}enable *o* disable *soloprivados | pconly*
 ┃➤ ${usedPrefix}enable *o* disable *sologrupos | gconly*  
 ╰━━━━━━━━━━━━━

 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 🍓
 ┃➤ ${usedPrefix}imagen | image *texto*
 ┃➤ ${usedPrefix}pinterest | dlpinterest *texto*
 ┃➤ ${usedPrefix}wallpaper|wp *texto*
 ┃➤ ${usedPrefix}play | play2 *texto o link*
 ┃➤ ${usedPrefix}play.1 *texto o link*
 ┃➤ ${usedPrefix}play.2 *texto o link*_
 ┃➤ ${usedPrefix}ytmp3 | yta *link*
 ┃➤ ${usedPrefix}ytmp4 | ytv *link*
 ┃➤ ${usedPrefix}pdocaudio | ytadoc *link*
 ┃➤ ${usedPrefix}pdocvieo | ytvdoc *link*
 ┃➤ ${usedPrefix}tw |twdl | twitter *link*
 ┃➤ ${usedPrefix}facebook | fb *link*
 ┃➤ ${usedPrefix}instagram *link video o imagen*
 ┃➤ ${usedPrefix}verig | igstalk *usuario(a)*
 ┃➤ ${usedPrefix}ighistoria | igstory *usuario(a)*
 ┃➤ ${usedPrefix}tiktok *link*
 ┃➤ ${usedPrefix}tiktokimagen | ttimagen *link*
 ┃➤ ${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*
 ┃➤ ${usedPrefix}vertiktok | tiktokstalk *usuario(a)*
 ┃➤ ${usedPrefix}mediafire | dlmediafire *link*
 ┃➤ ${usedPrefix}clonarepo | gitclone *link*
 ┃➤ ${usedPrefix}clima *país ciudad*
 ┃➤ ${usedPrefix}consejo
 ┃➤ ${usedPrefix}morse codificar *texto*
 ┃➤ ${usedPrefix}morse decodificar *morse*
 ┃➤ ${usedPrefix}fraseromantica
 ┃➤ ${usedPrefix}historia
 ╰━━━━━━━━━━━━━

 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑫𝒆𝒍 𝑮𝒓𝒖𝒑𝒐 🍓
 ┃➤ ${usedPrefix}add *numero*
 ┃➤ ${usedPrefix}sacar | ban | kick  *@tag*
 ┃➤ ${usedPrefix}grupo *abrir o cerrar*
 ┃➤ ${usedPrefix}group *open o close*
 ┃➤ ${usedPrefix}daradmin | promote *@tag*
 ┃➤ ${usedPrefix}quitar | demote *@tag*
 ┃➤ ${usedPrefix}banchat
 ┃➤ ${usedPrefix}unbanchat
 ┃➤ ${usedPrefix}banuser *@tag*
 ┃➤ ${usedPrefix}unbanuser *@tag*
 ┃➤ ${usedPrefix}admins *texto*
 ┃➤ ${usedPrefix}invocar *texto*
 ┃➤ ${usedPrefix}tagall *texto*
 ┃➤ ${usedPrefix}hidetag *texto*
 ┃➤ ${usedPrefix}infogrupo | infogroup
 ┃➤ ${usedPrefix}grupotiempo | grouptime *Cantidad*
 ┃➤ ${usedPrefix}advertencia *@tag*
 ┃➤ ${usedPrefix}deladvertencia *@tag*
 ┃➤ ${usedPrefix}delwarn *@tag*
 ┃➤ ${usedPrefix}crearvoto | startvoto *texto*
 ┃➤ ${usedPrefix}sivotar | upvote
 ┃➤ ${usedPrefix}novotar | devote
 ┃➤ ${usedPrefix}vervotos | cekvoto
 ┃➤ ${usedPrefix}delvoto | deletevoto
 ┃➤ ${usedPrefix}enlace | link
 ┃➤ ${usedPrefix}newnombre | nuevonombre *texto*
 ┃➤ ${usedPrefix}newdesc | descripcion *texto*
 ┃➤ ${usedPrefix}setwelcome | bienvenida *texto*
 ┃➤ ${usedPrefix}setbye | despedida *texto*
 ┃➤ ${usedPrefix}nuevoenlace | resetlink
 ┃➤ ${usedPrefix}enable
 ┃➤ ${usedPrefix}disable
  ╰━━━━━━━━━━━━━

 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑪𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒅𝒐𝒓𝒆𝒔 🍓
 ┃➤ ${usedPrefix}toimg | img | jpg *sticker*
 ┃➤ ${usedPrefix}toanime | jadianime *foto*
 ┃➤ ${usedPrefix}tomp3 | mp3 *video o nota de voz*
 ┃➤ ${usedPrefix}tovn | vn *video o audio*
 ┃➤ ${usedPrefix}tovideo *audio*
 ┃➤ ${usedPrefix}tourl *video, imagen*
 ┃➤ ${usedPrefix}toenlace  *video, imagen o audio*
 ┃➤ ${usedPrefix}tts es *texto*
 ╰━━━━━━━━━━━━━

 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑳𝒐𝒈𝒐𝒔 🍓
 ┃➤ ${usedPrefix}logos *efecto texto*
 ┃➤ ${usedPrefix}menulogos2
╰━━━━━━━━━━━━━
  
 ╭━   🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑳𝒐𝒈𝒐𝒔 🍓 
 *┃➤* _${usedPrefix}simpcard *@tag*_
 *┃➤* _${usedPrefix}hornycard *@tag*_
 *┃➤* _${usedPrefix}lolice *@tag*_
 *┃➤* _${usedPrefix}ytcomment *texto*_
 *┃➤* _${usedPrefix}itssostupid_
 *┃➤* _${usedPrefix}pixelar_
 *┃➤* _${usedPrefix}blur_
  ╰━━━━━━━━━━━━━

 
 ╭━   🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑨𝒏𝒊𝒎𝒆 🍓 
 ┃➤ ${usedPrefix}chica
 ┃➤ ${usedPrefix}chico
 ┃➤ ${usedPrefix}cristianoronaldo
 ┃➤ ${usedPrefix}messi
 ┃➤ ${usedPrefix}meme
 ┃➤ ${usedPrefix}meme2
 ┃➤ ${usedPrefix}itzy
 ┃➤ ${usedPrefix}blackpink
 ┃➤ ${usedPrefix}kpop *blackpink, o exo, o bts*
 ┃➤ ${usedPrefix}lolivid
 ┃➤ ${usedPrefix}loli
 ┃➤ ${usedPrefix}navidad
 ┃➤ ${usedPrefix}ppcouple
 ┃➤ ${usedPrefix}neko
 ┃➤ ${usedPrefix}waifu
 ┃➤ ${usedPrefix}akira
 ┃➤ ${usedPrefix}akiyama
 ┃➤ ${usedPrefix}anna
 ┃➤ {usedPrefix}asuna
 ┃➤ ${usedPrefix}ayuzawa
 ┃➤ ${usedPrefix}boruto
 ┃➤ ${usedPrefix}chiho
 ┃➤ ${usedPrefix}chitoge
 ┃➤ ${usedPrefix}deidara
 ┃➤ ${usedPrefix}erza
 ┃➤ ${usedPrefix}elaina
 ┃➤ ${usedPrefix}eba
 ┃➤ ${usedPrefix}emilia
 ┃➤ ${usedPrefix}hestia
 ┃➤ ${usedPrefix}hinata
 ┃➤ ${usedPrefix}inori
 ┃➤ ${usedPrefix}isuzu
 ┃➤ ${usedPrefix}itachi
 ┃➤ ${usedPrefix}itori
 ┃➤ ${usedPrefix}kaga
 ┃➤ ${usedPrefix}kagura
 ┃➤ ${usedPrefix}kaori
 ┃➤ ${usedPrefix}keneki
 ┃➤ ${usedPrefix}kotori
 ┃➤ ${usedPrefix}kurumi
 ┃➤ ${usedPrefix}madara
 ┃➤ ${usedPrefix}mikasa
 ┃➤ ${usedPrefix}miku
 ┃➤ ${usedPrefix}minato
 ┃➤ ${usedPrefix}naruto
 ┃➤ ${usedPrefix}nezuko
 ┃➤ ${usedPrefix}sagiri
 ┃➤ ${usedPrefix}sasuke
 ┃➤ ${usedPrefix}sakura
 ┃➤ ${usedPrefix}cosplay
 ╰━━━━━━━━━━━━━
  
 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑬𝒇𝒆𝒄𝒕𝒐𝒔 🍓
 ┃➤ ${usedPrefix}bass
 ┃➤ ${usedPrefix}blown
 ┃➤ ${usedPrefix}deep
 ┃➤ ${usedPrefix}earrape
 ┃➤ ${usedPrefix}fast
 ┃➤ ${usedPrefix}fat
 ┃➤ ${usedPrefix}nightcore
 ┃➤ ${usedPrefix}reverse
 ┃➤ ${usedPrefix}robot
 ┃➤ ${usedPrefix}slow
 ┃➤ ${usedPrefix}smooth
 ┃➤ ${usedPrefix}tupai
 ╰━━━━━━━━━━━━━
  	
 ╭━   🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑩𝒖𝒔𝒒𝒖𝒆𝒅𝒂𝒔 🍓
 ┃➤ ${usedPrefix}animeinfo *texto*
 ┃➤ ${usedPrefix}anuel
 ┃➤ ${usedPrefix}conejo
 ┃➤ ${usedPrefix}drago
 ┃➤ ${usedPrefix}feid
 ┃➤ ${usedPrefix}narcisistas
 ┃➤ ${usedPrefix}mangainfo *texto*
 ┃➤ ${usedPrefix}google *texto*
 ┃➤ ${usedPrefix}googlelyrics *texto*
 ┃➤ ${usedPrefix}letra | lirik *texto*
 ┃➤ ${usedPrefix}ytsearch | yts *texto*
 ┃➤ ${usedPrefix}wiki | wikipedia *texto*
 ╰━━━━━━━━━━━━━

 ╭━   🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑯𝒆𝒓𝒓𝒂𝒎𝒊𝒆𝒏𝒕𝒂𝒔 🍓
 ┃➤ ${usedPrefix}afk *motivo*
 ┃➤ _${usedPrefix}acortar *url*
 ┃➤ ${usedPrefix}calc *operacion math*
 ┃➤ ${usedPrefix}del *respondre a mensaje del Bot*
 ┃➤ ${usedPrefix}qrcode *texto*
 ┃➤ ${usedPrefix}readmore *texto1|texto2*
 ┃➤ ${usedPrefix}spamwa *numero|texto|cantidad*
 ┃➤ ${usedPrefix}styletext *texto*
 ┃➤ ${usedPrefix}traducir *texto*
 ┃➤ ${usedPrefix}morse codificar *texto*
 ┃➤ ${usedPrefix}morse decodificar *morse*
 ┃➤ ${usedPrefix}encuesta | poll *Motivo*
 ┃➤ ${usedPrefix}horario
 ╰━━━━━━━━━━━━━


 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑻𝒐𝒑𝒔 🍓
 ┃➤ ${usedPrefix}top
 ╰━━━━━━━━━━━━━
  
 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔 🍓 
 ┃➤ ${usedPrefix}sticker | s *imagen o video*
 ┃➤ ${usedPrefix}sticker | s *url de tipo jpg*
 ┃➤ ${usedPrefix}emojimix *😺+😆*
 ┃➤ ${usedPrefix}scircle | círculo *imagen*
 ┃➤ ${usedPrefix}semoji | emoji *tipo emoji*
 ┃➤ ${usedPrefix}attp *texto*
 ┃➤ ${usedPrefix}attp2 *texto*
 ┃➤ ${usedPrefix}ttp *texto*
 ┃➤ ${usedPrefix}ttp2 *texto*
 ┃➤ ${usedPrefix}ttp3 *texto*
 ┃➤ ${usedPrefix}ttp4 *texto*
 ┃➤ ${usedPrefix}ttp5 *texto*
 ┃➤ ${usedPrefix}ttp6 *texto*
 ┃➤ ${usedPrefix}dado
 ┃➤ ${usedPrefix}stickermarker *efecto : responder a imagen*
 ┃➤ ${usedPrefix}stickerfilter *efecto : responder a imagen*
 ┃➤ ${usedPrefix}cs *:* cs2
 ╰━━━━━━━━━━━━━
  
 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔 2 🍓
 ┃➤ ${usedPrefix}wm *packname|author*
 ┃➤ ${usedPrefix}wm *texto1|texto2*
 ╰━━━━━━━━━━━━━
  
 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑩𝒐𝒕 𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔 3 🍓
 ┃➤ ${usedPrefix}palmaditas | pat *@tag*
 ┃➤ ${usedPrefix}bofetada | slap *@tag*
 ┃➤ ${usedPrefix}golpear *@tag*
 ┃➤ ${usedPrefix}besar | kiss *@tag*
 ┃➤ ${usedPrefix}alimentar | food *@tag*
 ╰━━━━━━━━━━━━━
  
 ╭━    🍓 𝑺𝒕𝒓𝒂𝒘𝑩𝒐𝒕 𝑶𝒘𝒏𝒆𝒓𝒔 🍓
 ┃➤ ${usedPrefix}join *enlace*
 ┃➤ ${usedPrefix}unete *enlace*
 ┃➤ ${usedPrefix}dardiamantes *cantidad*
 ┃➤ ${usedPrefix}darxp *cantidad*
 ┃➤ ${usedPrefix}darManjirocoins *cantidad*
 ┃➤ ${usedPrefix}addprem | userpremium *@tag* *cantidad*
 ┃➤ ${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*
 ┃➤ ${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*
 ┃➤ ${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*
 ┃➤ ${usedPrefix}idioma | language
 ┃➤ ${usedPrefix}cajafuerte
 ┃➤ ${usedPrefix}comunicar | broadcastall | bc *texto*
 ┃➤ ${usedPrefix}broadcastchats | bcc *texto*
 ┃➤ ${usedPrefix}comunicarpv *texto*
 ┃➤ ${usedPrefix}broadcastgc *texto*
 ┃➤ ${usedPrefix}comunicargrupos *texto*
 ┃➤ ${usedPrefix}borrartmp | cleartmp
 ┃➤ ${usedPrefix}delexp *@tag*
 ┃➤ ${usedPrefix}delManjirocoins *@tag*
 ┃➤ ${usedPrefix}deldiamantes *@tag*
 ┃➤ ${usedPrefix}reiniciar | restart
 ┃➤ ${usedPrefix}actualizar | update
 ┃➤ ${usedPrefix}addprem | +prem *@tag*
 ┃➤ ${usedPrefix}delprem | -prem *@tag*
 ┃➤ ${usedPrefix}listapremium | listprem
 ┃➤ ${usedPrefix}añadirdiamantes *@tag cantidad*
 ┃➤ ${usedPrefix}añadirxp *@tag cantidad*
 ┃➤ ${usedPrefix}añadirManjirocoins *@tag cantidad*
 ╰━━━━━━━━━━━━━ `.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

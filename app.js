// 羽田空港 出発時刻表 全路線完全マスターデータ (国内線はすべて羽田発の奇数便に統一)
const MASTER_FLIGHTS = [
  { time: "00:05", number: "JL35", destJa: "シンガポール", destEn: "SINGAPORE", isNorth: false },
  { time: "00:15", number: "JL41", destJa: "ロンドン(ヒースロー)", destEn: "LONDON(LHR)", isNorth: true },
  { time: "00:45", number: "JL27", destJa: "香港", destEn: "HONG KONG", isNorth: false },
  { time: "01:20", number: "JL33", destJa: "バンコク", destEn: "BANGKOK", isNorth: false },
  { time: "01:50", number: "JL79", destJa: "ホーチミン", destEn: "HO CHI MINH", isNorth: false },
  { time: "01:55", number: "JL77", destJa: "マニラ", destEn: "MANILA", isNorth: false },
  { time: "06:20", number: "JL623", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "06:25", number: "JL303", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "06:25", number: "JL641", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "06:30", number: "JL101", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "06:30", number: "JL901", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "06:35", number: "JL501", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "06:45", number: "JL221", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "06:50", number: "JL431", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "06:50", number: "JL565", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "07:00", number: "JL161", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "07:00", number: "JL183", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "07:00", number: "JL253", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "07:00", number: "JL301", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:00", number: "JL453", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "07:05", number: "JL103", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "07:05", number: "JL277", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "07:05", number: "JL305", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:05", number: "JL307", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:05", number: "JL475", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "07:10", number: "JL233", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "07:10", number: "JL971", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "07:15", number: "JL175", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "07:15", number: "JL503", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "07:20", number: "JL903", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "07:25", number: "JL141", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "07:25", number: "JL309", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:30", number: "JL209", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "07:30", number: "JL491", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "07:30", number: "JL585", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "07:30", number: "JL591", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "07:30", number: "JL605", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "07:30", number: "JL905", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "07:35", number: "JL143", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "07:35", number: "JL279", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "07:35", number: "JL551", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "07:35", number: "JL625", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "07:35", number: "JL643", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "07:40", number: "JL185", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "07:40", number: "JL255", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "07:40", number: "JL291", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "07:40", number: "JL505", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "07:45", number: "JL213", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "07:45", number: "JL541", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "07:45", number: "JL573", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "07:45", number: "JL689", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "07:50", number: "JL477", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "07:50", number: "JL47", destJa: "ヘルシンキ", destEn: "HELSINKI", isNorth: true },
  { time: "08:00", number: "JL2501", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:00", number: "JL293", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "08:00", number: "JL311", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "08:00", number: "JL373", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "08:05", number: "JL153", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "08:05", number: "JL627", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "08:05", number: "JL645", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "08:05", number: "JL661", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "08:05", number: "JL687", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "08:05", number: "JL907", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "08:10", number: "JL3101", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "08:15", number: "JL201", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "08:15", number: "JL235", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "08:15", number: "JL281", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "08:20", number: "JL507", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:20", number: "JL91", destJa: "金浦(ソウル)", destEn: "SEOUL(GMP)", isNorth: true },
  { time: "08:25", number: "JL2503", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:30", number: "JL107", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "08:35", number: "JL257", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "08:40", number: "JL2001", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:40", number: "JL909", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "08:40", number: "JL87", destJa: "広州", destEn: "GUANGZHOU", isNorth: false },
  { time: "08:45", number: "JL187", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "08:45", number: "JL647", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "08:50", number: "JL509", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:50", number: "JL21", destJa: "首都(北京)", destEn: "BEIJING(PEK)", isNorth: true },
  { time: "08:55", number: "JL455", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "08:55", number: "JL97", destJa: "台北(松山)", destEn: "TAIPEI(TSA)", isNorth: false },
  { time: "09:00", number: "JL2007", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "09:05", number: "JL313", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "09:10", number: "JL145", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "09:10", number: "JL283", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "09:10", number: "JL81", destJa: "上海", destEn: "SHANGHAI", isNorth: true },
  { time: "09:15", number: "JL111", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "09:15", number: "JL315", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "09:15", number: "JL433", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "09:15", number: "JL493", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "09:20", number: "JL563", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "09:20", number: "JL23", destJa: "大連", destEn: "DALIAN", isNorth: true },
  { time: "09:25", number: "JL113", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "09:30", number: "JL189", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "09:30", number: "JL259", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "09:35", number: "JL177", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "09:35", number: "JL663", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "09:35", number: "JL739", destJa: "奄美大島", destEn: "AMAMI", isNorth: false },
  { time: "09:40", number: "JL583", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "09:40", number: "JL911", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "09:45", number: "JL479", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "09:45", number: "JL43", destJa: "ロンドン(ヒースロー)", destEn: "LONDON(LHR)", isNorth: true },
  { time: "09:50", number: "JL285", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "09:50", number: "JL511", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "09:50", number: "JL553", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "09:55", number: "JL571", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "09:55", number: "JL691", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "09:55", number: "JL29", destJa: "香港", destEn: "HONG KONG", isNorth: false },
  { time: "10:00", number: "JL317", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "10:00", number: "JL543", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "10:00", number: "JL607", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "10:00", number: "JL629", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "10:05", number: "JL147", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "10:05", number: "JL649", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "10:10", number: "JL261", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "10:15", number: "JL115", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "10:15", number: "JL237", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "10:20", number: "JL239", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "10:20", number: "JL513", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "10:20", number: "JL45", destJa: "パリ", destEn: "PARIS", isNorth: true },
  { time: "10:25", number: "JL295", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "10:25", number: "JL457", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "10:30", number: "JL163", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "10:35", number: "JL319", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "10:35", number: "JL693", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "10:35", number: "JL913", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "10:40", number: "JL665", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "10:40", number: "JL933", destJa: "宮古", destEn: "MIYAKO", isNorth: false },
  { time: "10:40", number: "JL31", destJa: "バンコク", destEn: "BANGKOK", isNorth: false },
  { time: "10:45", number: "JL117", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "10:45", number: "JL12", destJa: "ダラス", destEn: "DALLAS", isNorth: false },
  { time: "10:50", number: "JL515", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "10:55", number: "JL321", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "10:55", number: "JL39", destJa: "デリー", destEn: "DELHI", isNorth: false },
  { time: "11:00", number: "JL155", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "11:00", number: "JL555", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "11:00", number: "JL575", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "11:00", number: "JL6", destJa: "ニューヨーク", destEn: "NEW YORK", isNorth: true },
  { time: "11:05", number: "JL191", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "11:10", number: "JL481", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "11:10", number: "JL973", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "11:20", number: "JL119", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "11:20", number: "JL659", destJa: "奄美大島", destEn: "AMAMI", isNorth: false },
  { time: "11:25", number: "JL323", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "11:25", number: "JL631", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "11:25", number: "JL987", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "11:30", number: "JL121", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "11:30", number: "JL215", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "11:30", number: "JL517", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "11:35", number: "JL263", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "11:40", number: "JL695", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "11:45", number: "JL483", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "11:45", number: "JL915", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "11:50", number: "JL157", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "11:55", number: "JL325", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "11:55", number: "JL667", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "12:00", number: "JL149", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "12:00", number: "JL223", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "12:00", number: "JL265", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "12:00", number: "JL651", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "12:05", number: "JL669", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "12:10", number: "JL165", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "12:10", number: "JL435", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "12:15", number: "JL545", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "12:20", number: "JL461", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "12:25", number: "JL241", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "12:25", number: "JL567", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "12:30", number: "JL123", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "12:35", number: "JL225", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "12:35", number: "JL609", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "12:40", number: "JL125", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "12:40", number: "JL287", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "12:40", number: "JL519", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "12:45", number: "JL297", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "12:45", number: "JL459", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "12:50", number: "JL327", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "12:50", number: "JL587", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "12:50", number: "JL633", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "13:00", number: "JL193", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "13:05", number: "JL483", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "13:10", number: "JL577", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "13:15", number: "JL151", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "13:20", number: "JL485", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "13:25", number: "JL917", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "13:30", number: "JL127", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "13:30", number: "JL521", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "13:30", number: "JL611", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "13:35", number: "JL129", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "13:40", number: "JL375", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "13:45", number: "JL267", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "13:45", number: "JL329", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "13:50", number: "JL217", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "13:50", number: "JL579", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "13:55", number: "JL919", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "14:00", number: "JL557", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "14:05", number: "JL495", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "14:10", number: "JL697", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "14:15", number: "JL269", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "14:15", number: "JL523", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "14:15", number: "JL653", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "14:20", number: "JL699", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "14:25", number: "JL131", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "14:25", number: "JL437", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "14:30", number: "JL243", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "14:30", number: "JL935", destJa: "宮古", destEn: "MIYAKO", isNorth: false },
  { time: "14:35", number: "JL331", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "14:40", number: "JL635", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "14:45", number: "JL169", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "14:45", number: "JL655", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "14:45", number: "JL975", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "14:50", number: "JL195", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "14:55", number: "JL133", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "14:55", number: "JL159", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "14:55", number: "JL289", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "14:55", number: "JL563", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "14:55", number: "JL589", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "15:00", number: "JL671", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "15:05", number: "JL299", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "15:10", number: "JL921", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "15:15", number: "JL153", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "15:15", number: "JL487", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "15:15", number: "JL637", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "15:25", number: "JL525", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "15:30", number: "JL271", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "15:30", number: "JL439", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "15:35", number: "JL135", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "15:40", number: "JL463", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "15:55", number: "JL333", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "16:00", number: "JL155", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "16:00", number: "JL527", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "16:15", number: "JL497", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "16:25", number: "JL701", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "16:30", number: "JL137", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "16:30", number: "JL221", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "16:30", number: "JL657", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "16:40", number: "JL301", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "16:40", number: "JL529", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "16:40", number: "JL673", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "16:45", number: "JL197", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "16:45", number: "JL291", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "16:55", number: "JL139", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "16:55", number: "JL273", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "16:55", number: "JL441", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "16:55", number: "JL499", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "17:00", number: "JL335", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "17:05", number: "JL161", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "17:10", number: "JL245", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "17:10", number: "JL591", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "17:15", number: "JL293", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "17:15", number: "JL547", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "17:15", number: "JL571", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "17:20", number: "JL489", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "17:20", number: "JL675", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "17:25", number: "JL559", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "17:25", number: "JL615", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "17:30", number: "JL181", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "17:30", number: "JL247", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "17:35", number: "JL141", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "17:35", number: "JL581", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "17:35", number: "JL639", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "17:45", number: "JL337", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "17:45", number: "JL617", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "17:55", number: "JL339", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "17:55", number: "JL659", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "17:55", number: "JL955", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "18:00", number: "JL143", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "18:00", number: "JL303", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "18:00", number: "JL375", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "18:00", number: "JL531", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "18:10", number: "JL275", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "18:15", number: "JL295", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "18:20", number: "JL465", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "18:20", number: "JL533", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "18:25", number: "JL145", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "18:25", number: "JL377", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "18:30", number: "JL163", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "18:30", number: "JL199", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "18:40", number: "JL147", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "18:40", number: "JL183", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "18:40", number: "JL491", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "18:40", number: "JL535", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "18:45", number: "JL249", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "18:45", number: "JL341", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "18:50", number: "JL157", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "18:55", number: "JL501", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "18:55", number: "JL703", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "19:00", number: "JL305", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "19:00", number: "JL923", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "19:00", number: "JL977", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "19:05", number: "JL503", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "19:10", number: "JL149", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "19:10", number: "JL171", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "19:10", number: "JL925", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "19:15", number: "JL173", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "19:15", number: "JL343", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "19:15", number: "JL537", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "19:25", number: "JL661", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "19:30", number: "JL345", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "19:30", number: "JL619", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "19:35", number: "JL151", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "19:40", number: "JL251", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "19:40", number: "JL927", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "19:45", number: "JL443", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "19:45", number: "JL467", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "19:50", number: "JL159", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "19:55", number: "JL209", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "19:55", number: "JL277", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "19:55", number: "JL539", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "20:05", number: "JL153", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "20:05", number: "JL929", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "20:15", number: "JL223", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "20:15", number: "JL493", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "20:15", number: "JL677", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "20:30", number: "JL541", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "20:40", number: "JL201", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "20:40", number: "JL225", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "20:45", number: "JL543", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "20:50", number: "JL161", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "20:55", number: "JL211", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false }
];

MASTER_FLIGHTS.forEach(f => {
  f.gate = f.isNorth 
    ? Math.floor(Math.random() * (29 - 16 + 1)) + 16  // 北方面: 16〜29番
    : Math.floor(Math.random() * (15 - 3 + 1)) + 3;    // 南方面: 3〜15番
});

let isEnglish = false;
let previousFlightSignatures = "";

setInterval(() => {
  isEnglish = !isEnglish;
  updateHeaderLanguage();
  updateBoard(true, true);
}, 8000);

setInterval(() => {
  updateClock();
  updateBoard(false, false);
}, 1000);

function updateClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const daysJa = ['日', '月', '火', '水', '木', '金', '土'];
  const dayStr = daysJa[now.getDay()];

  document.getElementById('dateDisplay').textContent = `${year}年${month}月${date}日 (${dayStr})`;
  document.getElementById('hoursDisplay').textContent = String(now.getHours()).padStart(2, '0');
  document.getElementById('minutesDisplay').textContent = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('secondsDisplay').textContent = String(now.getSeconds()).padStart(2, '0');
}

function updateHeaderLanguage() {
  document.getElementById('headAirline').textContent = isEnglish ? 'AIRLINE' : '航空会社';
  document.getElementById('headFlight').textContent = isEnglish ? 'FLIGHT' : '便名';
  document.getElementById('headDest').textContent = isEnglish ? 'DESTINATION' : '行先';
  document.getElementById('headTime').textContent = isEnglish ? 'TIME' : '出発時刻';
  document.getElementById('headGate').textContent = isEnglish ? 'GATE' : '搭乗口';
  document.getElementById('headRemarks').textContent = isEnglish ? 'REMARKS' : '備考';
}

function getStatus(diffMinutes) {
  if (diffMinutes < 0) return { ja: '出発済み', en: 'DEPARTED' };
  if (diffMinutes <= 15) return { ja: '搭乗中', en: 'BOARDING' };
  if (diffMinutes <= 40) return { ja: '保安検査締め切り間近', en: 'CLOSE SOON' };
  if (diffMinutes <= 60) return { ja: '搭乗手続き中', en: 'CHECK-IN' };
  return { ja: '定刻', en: 'ON TIME' };
}

function updateBoard(forceFlip = false, isLanguageSwitch = false) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const flightsWithDiff = MASTER_FLIGHTS.map(flight => {
    const [h, m] = flight.time.split(':').map(Number);
    const flightMinutes = h * 60 + m;
    let diff = flightMinutes - currentMinutes;
    return { ...flight, flightMinutes, diff };
  });

  flightsWithDiff.sort((a, b) => a.flightMinutes - b.flightMinutes);

  let startIndex = flightsWithDiff.findIndex(f => f.flightMinutes >= currentMinutes);
  if (startIndex === -1) startIndex = 0;

  const activeFlights = [];
  for (let i = 0; i < 10; i++) {
    const targetIndex = (startIndex + i) % flightsWithDiff.length;
    const f = flightsWithDiff[targetIndex];
    
    let adjustedDiff = f.flightMinutes - currentMinutes;
    if (adjustedDiff < 0) adjustedDiff += 1440;

    const status = getStatus(adjustedDiff);
    activeFlights.push({ ...f, diff: adjustedDiff, status });
  }

  const currentSignature = activeFlights.map(f => f.number + f.time + f.status.en).join();
  const contentChanged = currentSignature !== previousFlightSignatures || forceFlip;
  previousFlightSignatures = currentSignature;

  const container = document.getElementById('solariRows');
  const noMsg = document.getElementById('noFlightsMessage');
  noMsg.style.display = 'none';

  const flipDuration = isLanguageSwitch ? '1.2s' : '0.4s';

  // 初回生成または内容が変わった時だけDOMを再構築する（毎秒のチラつき防止）
  if (container.children.length === 0 || contentChanged) {
    container.innerHTML = '';

    for (let i = 0; i < activeFlights.length; i++) {
      const f = activeFlights[i];
      const isJal = f.number.startsWith('JL') || f.number.startsWith('JAL');
      const isDeparted = f.diff < 0;

      const row = document.createElement('div');
      row.className = `flight-row ${isJal ? 'jal' : ''} ${isDeparted ? 'departed' : ''}`;

      const airlineText = isJal 
        ? (isEnglish ? 'JAPAN<br>AIRLINES' : '日本航空') 
        : (isEnglish ? 'JAL' : 'JAL');

      const destText = isEnglish ? f.destEn : f.destJa;
      const statusText = isEnglish ? f.status.en : f.status.ja;

      // forceFlip または言語切替時のみフリップクラスを付与
      const shouldFlip = forceFlip || isLanguageSwitch;

      row.innerHTML = `
        <div class="solari-plate col-airline ${shouldFlip ? 'flipping' : ''}" style="--flip-duration: ${flipDuration};">${airlineText}</div>
        <div class="solari-plate col-flight ${shouldFlip ? 'flipping' : ''}" style="--flip-duration: ${flipDuration};">${f.number}</div>
        <div class="solari-plate col-dest ${shouldFlip ? 'flipping' : ''}" style="--flip-duration: ${flipDuration};">${destText}</div>
        <div class="solari-plate col-time ${shouldFlip ? 'flipping' : ''}" style="--flip-duration: ${flipDuration};">${f.time}</div>
        <div class="solari-plate col-gate ${shouldFlip ? 'flipping' : ''}" style="--flip-duration: ${flipDuration};">${f.gate}</div>
        <div class="solari-plate col-remarks ${shouldFlip ? 'flipping' : ''}" style="--flip-duration: ${flipDuration};">${statusText}</div>
      `;

      container.appendChild(row);
    }
  }
}

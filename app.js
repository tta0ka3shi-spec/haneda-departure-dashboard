// 羽田空港 出発時刻表 全路線完全マスターデータ (全319便)
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
  { time: "06:45", number: "JL220", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "06:50", number: "JL431", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "06:50", number: "JL565", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "07:00", number: "JL161", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "07:00", number: "JL183", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "07:00", number: "JL253", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "07:00", number: "JL300", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:00", number: "JL453", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "07:05", number: "JL102", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "07:05", number: "JL277", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "07:05", number: "JL301", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:05", number: "JL305", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:05", number: "JL474", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "07:10", number: "JL232", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "07:10", number: "JL971", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "07:15", number: "JL175", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "07:15", number: "JL503", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "07:20", number: "JL903", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "07:25", number: "JL141", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "07:25", number: "JL302", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "07:30", number: "JL208", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "07:30", number: "JL491", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "07:30", number: "JL585", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "07:30", number: "JL590", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "07:30", number: "JL605", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "07:30", number: "JL900", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "07:35", number: "JL140", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "07:35", number: "JL276", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "07:35", number: "JL551", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "07:35", number: "JL622", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "07:35", number: "JL640", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "07:40", number: "JL182", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "07:40", number: "JL252", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "07:40", number: "JL290", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "07:40", number: "JL500", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "07:45", number: "JL213", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "07:45", number: "JL541", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "07:45", number: "JL573", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "07:45", number: "JL688", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "07:50", number: "JL475", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "07:50", number: "JL47", destJa: "ヘルシンキ", destEn: "HELSINKI", isNorth: true },
  { time: "08:00", number: "JL2500", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:00", number: "JL291", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "08:00", number: "JL305", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "08:00", number: "JL373", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "08:05", number: "JL153", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "08:05", number: "JL625", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "08:05", number: "JL643", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "08:05", number: "JL661", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "08:05", number: "JL687", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "08:05", number: "JL905", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "08:10", number: "JL3101", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "08:15", number: "JL201", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "08:15", number: "JL231", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "08:15", number: "JL287", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "08:20", number: "JL505", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:20", number: "JL91", destJa: "金浦(ソウル)", destEn: "SEOUL(GMP)", isNorth: true },
  { time: "08:25", number: "JL2503", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:30", number: "JL107", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "08:35", number: "JL255", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "08:40", number: "JL2000", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:40", number: "JL907", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "08:40", number: "JL87", destJa: "広州", destEn: "GUANGZHOU", isNorth: false },
  { time: "08:45", number: "JL184", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "08:45", number: "JL642", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "08:50", number: "JL507", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "08:50", number: "JL21", destJa: "首都(北京)", destEn: "BEIJING(PEK)", isNorth: true },
  { time: "08:55", number: "JL454", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "08:55", number: "JL97", destJa: "台北(松山)", destEn: "TAIPEI(TSA)", isNorth: false },
  { time: "09:00", number: "JL2007", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "09:05", number: "JL309", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "09:10", number: "JL142", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "09:10", number: "JL278", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "09:10", number: "JL81", destJa: "上海", destEn: "SHANGHAI", isNorth: true },
  { time: "09:15", number: "JL111", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "09:15", number: "JL311", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "09:15", number: "JL433", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "09:15", number: "JL493", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "09:20", number: "JL562", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "09:20", number: "JL23", destJa: "大連", destEn: "DALIAN", isNorth: true },
  { time: "09:25", number: "JL110", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "09:30", number: "JL185", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "09:30", number: "JL254", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "09:35", number: "JL174", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "09:35", number: "JL663", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "09:35", number: "JL738", destJa: "奄美大島", destEn: "AMAMI", isNorth: false },
  { time: "09:40", number: "JL584", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "09:40", number: "JL909", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "09:45", number: "JL476", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "09:45", number: "JL43", destJa: "ロンドン(ヒースロー)", destEn: "LONDON(LHR)", isNorth: true },
  { time: "09:50", number: "JL279", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "09:50", number: "JL509", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "09:50", number: "JL552", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "09:55", number: "JL570", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "09:55", number: "JL689", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "09:55", number: "JL29", destJa: "香港", destEn: "HONG KONG", isNorth: false },
  { time: "10:00", number: "JL313", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "10:00", number: "JL540", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "10:00", number: "JL607", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "10:00", number: "JL627", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "10:05", number: "JL143", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "10:05", number: "JL645", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "10:10", number: "JL257", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "10:15", number: "JL112", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "10:15", number: "JL234", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "10:20", number: "JL233", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "10:20", number: "JL511", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "10:20", number: "JL45", destJa: "パリ", destEn: "PARIS", isNorth: true },
  { time: "10:25", number: "JL292", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "10:25", number: "JL455", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "10:30", number: "JL163", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "10:35", number: "JL310", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "10:35", number: "JL690", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "10:35", number: "JL913", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "10:40", number: "JL662", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "10:40", number: "JL933", destJa: "宮古", destEn: "MIYAKO", isNorth: false },
  { time: "10:40", number: "JL31", destJa: "バンコク", destEn: "BANGKOK", isNorth: false },
  { time: "10:45", number: "JL113", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "10:45", number: "JL12", destJa: "ダラス", destEn: "DALLAS", isNorth: false },
  { time: "10:50", number: "JL506", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "10:55", number: "JL315", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "10:55", number: "JL39", destJa: "デリー", destEn: "DELHI", isNorth: false },
  { time: "11:00", number: "JL155", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "11:00", number: "JL553", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "11:00", number: "JL575", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "11:00", number: "JL6", destJa: "ニューヨーク", destEn: "NEW YORK", isNorth: true },
  { time: "11:05", number: "JL186", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "11:10", number: "JL479", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "11:10", number: "JL972", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "11:20", number: "JL114", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "11:20", number: "JL659", destJa: "奄美大島", destEn: "AMAMI", isNorth: false },
  { time: "11:25", number: "JL312", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "11:25", number: "JL629", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "11:25", number: "JL987", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "11:30", number: "JL115", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "11:30", number: "JL215", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "11:30", number: "JL513", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "11:35", number: "JL259", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "11:40", number: "JL691", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "11:45", number: "JL478", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "11:45", number: "JL915", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "11:50", number: "JL154", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "11:55", number: "JL317", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "11:55", number: "JL668", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "12:00", number: "JL144", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "12:00", number: "JL224", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "12:00", number: "JL256", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "12:00", number: "JL647", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "12:05", number: "JL665", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "12:10", number: "JL164", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "12:10", number: "JL435", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "12:15", number: "JL543", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "12:20", number: "JL456", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "12:25", number: "JL236", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "12:25", number: "JL567", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "12:30", number: "JL117", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "12:35", number: "JL225", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "12:35", number: "JL609", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "12:40", number: "JL116", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "12:40", number: "JL280", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "12:40", number: "JL515", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "12:45", number: "JL293", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "12:45", number: "JL459", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "12:50", number: "JL319", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "12:50", number: "JL587", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "12:50", number: "JL631", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "13:00", number: "JL187", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "13:05", number: "JL481", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "13:10", number: "JL572", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "13:15", number: "JL145", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "13:20", number: "JL480", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "13:25", number: "JL910", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "13:30", number: "JL118", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "13:30", number: "JL517", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "13:30", number: "JL611", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "13:35", number: "JL119", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "13:40", number: "JL375", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "13:45", number: "JL258", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "13:45", number: "JL321", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "13:50", number: "JL214", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "13:50", number: "JL577", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "13:55", number: "JL917", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "14:00", number: "JL555", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "14:05", number: "JL495", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "14:10", number: "JL692", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "14:15", number: "JL263", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "14:15", number: "JL519", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "14:15", number: "JL649", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "14:20", number: "JL693", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "14:25", number: "JL121", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "14:25", number: "JL436", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "14:30", number: "JL237", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "14:30", number: "JL934", destJa: "宮古", destEn: "MIYAKO", isNorth: false },
  { time: "14:35", number: "JL323", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "14:40", number: "JL633", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "14:45", number: "JL165", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "14:45", number: "JL648", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "14:45", number: "JL973", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "14:50", number: "JL188", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "14:55", number: "JL125", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "14:55", number: "JL157", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "14:55", number: "JL283", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "14:55", number: "JL564", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "14:55", number: "JL586", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "15:00", number: "JL667", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "15:05", number: "JL294", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "15:10", number: "JL919", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "15:15", number: "JL146", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "15:15", number: "JL483", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "15:15", number: "JL632", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "15:25", number: "JL521", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "15:30", number: "JL263", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "15:30", number: "JL437", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "15:35", number: "JL120", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "15:40", number: "JL461", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "15:55", number: "JL325", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "16:00", number: "JL147", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "16:00", number: "JL516", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "16:15", number: "JL497", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "16:25", number: "JL695", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "16:30", number: "JL127", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "16:30", number: "JL219", destJa: "南紀白浜", destEn: "SHIRAHAMA", isNorth: false },
  { time: "16:30", number: "JL651", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "16:40", number: "JL295", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "16:40", number: "JL523", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "16:40", number: "JL669", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "16:45", number: "JL189", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "16:45", number: "JL285", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "16:55", number: "JL128", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "16:55", number: "JL264", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "16:55", number: "JL439", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "16:55", number: "JL497", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "17:00", number: "JL327", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "17:05", number: "JL159", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "17:10", number: "JL238", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "17:10", number: "JL589", destJa: "函館", destEn: "HAKODATE", isNorth: true },
  { time: "17:15", number: "JL284", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "17:15", number: "JL545", destJa: "釧路", destEn: "KUSHIRO", isNorth: true },
  { time: "17:15", number: "JL569", destJa: "女満別", destEn: "MEMANBETSU", isNorth: true },
  { time: "17:20", number: "JL484", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "17:20", number: "JL672", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "17:25", number: "JL557", destJa: "旭川", destEn: "ASAHIKAWA", isNorth: true },
  { time: "17:25", number: "JL613", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "17:30", number: "JL179", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "17:30", number: "JL239", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "17:35", number: "JL131", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "17:35", number: "JL579", destJa: "帯広", destEn: "OBIHIRO", isNorth: true },
  { time: "17:35", number: "JL637", destJa: "熊本", destEn: "KUMAMOTO", isNorth: false },
  { time: "17:45", number: "JL329", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "17:45", number: "JL613", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "17:55", number: "JL331", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "17:55", number: "JL653", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "17:55", number: "JL955", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "18:00", number: "JL133", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "18:00", number: "JL297", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "18:00", number: "JL373", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "18:00", number: "JL522", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "18:10", number: "JL265", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "18:15", number: "JL287", destJa: "出雲", destEn: "IZUMO", isNorth: false },
  { time: "18:20", number: "JL463", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "18:20", number: "JL526", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "18:25", number: "JL130", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "18:25", number: "JL377", destJa: "北九州", destEn: "KITAKYUSHU", isNorth: false },
  { time: "18:30", number: "JL158", destJa: "三沢", destEn: "MISAWA", isNorth: true },
  { time: "18:30", number: "JL191", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "18:40", number: "JL137", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "18:40", number: "JL178", destJa: "山形", destEn: "YAMAGATA", isNorth: true },
  { time: "18:40", number: "JL485", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "18:40", number: "JL527", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "18:45", number: "JL240", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "18:45", number: "JL331", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "18:50", number: "JL149", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "18:55", number: "JL499", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "18:55", number: "JL697", destJa: "宮崎", destEn: "MIYAZAKI", isNorth: false },
  { time: "19:00", number: "JL297", destJa: "山口宇部", destEn: "YAMAGUCHI", isNorth: false },
  { time: "19:00", number: "JL918", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "19:00", number: "JL974", destJa: "石垣", destEn: "ISHIGAKI", isNorth: false },
  { time: "19:05", number: "JL498", destJa: "高知", destEn: "KOCHI", isNorth: false },
  { time: "19:10", number: "JL139", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "19:10", number: "JL167", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "19:10", number: "JL920", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "19:15", number: "JL168", destJa: "秋田", destEn: "AKITA", isNorth: true },
  { time: "19:15", number: "JL333", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "19:15", number: "JL524", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "19:25", number: "JL655", destJa: "鹿児島", destEn: "KAGOSHIMA", isNorth: false },
  { time: "19:30", number: "JL335", destJa: "福岡", destEn: "FUKUOKA", isNorth: false },
  { time: "19:30", number: "JL615", destJa: "長崎", destEn: "NAGASAKI", isNorth: false },
  { time: "19:35", number: "JL134", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "19:40", number: "JL241", destJa: "岡山", destEn: "OKAYAMA", isNorth: false },
  { time: "19:40", number: "JL923", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "19:45", number: "JL443", destJa: "松山", destEn: "MATSUYAMA", isNorth: false },
  { time: "19:45", number: "JL465", destJa: "徳島", destEn: "TOKUSHIMA", isNorth: false },
  { time: "19:50", number: "JL151", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "19:55", number: "JL209", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false },
  { time: "19:55", number: "JL267", destJa: "広島", destEn: "HIROSHIMA", isNorth: false },
  { time: "19:55", number: "JL529", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "20:05", number: "JL138", destJa: "大阪(伊丹)", destEn: "OSAKA(ITM)", isNorth: false },
  { time: "20:05", number: "JL925", destJa: "沖縄(那覇)", destEn: "OKINAWA(OKA)", isNorth: false },
  { time: "20:15", number: "JL228", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "20:15", number: "JL487", destJa: "高松", destEn: "TAKAMATSU", isNorth: false },
  { time: "20:15", number: "JL671", destJa: "大分", destEn: "OITA", isNorth: false },
  { time: "20:30", number: "JL599", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "20:40", number: "JL193", destJa: "小松", destEn: "KOMATSU", isNorth: true },
  { time: "20:40", number: "JL229", destJa: "大阪(関西)", destEn: "OSAKA(KIX)", isNorth: false },
  { time: "20:45", number: "JL531", destJa: "札幌(新千歳)", destEn: "SAPPORO(CTS)", isNorth: true },
  { time: "20:50", number: "JL150", destJa: "青森", destEn: "AOMORI", isNorth: true },
  { time: "20:55", number: "JL208", destJa: "名古屋(中部)", destEn: "NAGOYA(NGO)", isNorth: false }
];

MASTER_FLIGHTS.forEach(f => {
  f.gate = f.isNorth 
    ? Math.floor(Math.random() * (15 - 3 + 1)) + 3 
    : Math.floor(Math.random() * (29 - 16 + 1)) + 16;
});

let isEnglish = false;
let previousFlightSignatures = "";

setInterval(() => {
  isEnglish = !isEnglish;
  updateHeaderLanguage();
  updateBoard(true);
}, 5000);

setInterval(() => {
  updateClock();
  updateBoard(false);
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
  document.getElementById('headFlight').textContent = isEnglish ? 'FLIGHT' : '便名';
  document.getElementById('headDest').textContent = isEnglish ? 'DESTINATION' : '行先';
  document.getElementById('headTime').textContent = isEnglish ? 'TIME' : '時刻';
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

function updateBoard(forceFlip = false) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const activeFlights = [];

  for (const flight of MASTER_FLIGHTS) {
    const [h, m] = flight.time.split(':').map(Number);
    const flightMinutes = h * 60 + m;
    const diff = flightMinutes - currentMinutes;

    if (diff < -20) continue;

    const status = getStatus(diff);
    activeFlights.push({ ...flight, status, diff });
  }

  // 最大10件に変更
  const displayLimit = 10;
  const currentSignature = activeFlights.slice(0, displayLimit).map(f => f.number + f.time + f.status.en).join();
  const contentChanged = currentSignature !== previousFlightSignatures || forceFlip;
  previousFlightSignatures = currentSignature;

  const container = document.getElementById('solariRows');
  const noMsg = document.getElementById('noFlightsMessage');
  container.innerHTML = '';

  const displayCount = Math.min(displayLimit, activeFlights.length);

  if (displayCount === 0) {
    noMsg.style.display = 'block';
    return;
  }
  noMsg.style.display = 'none';

  for (let i = 0; i < displayCount; i++) {
    const f = activeFlights[i];
    const isJal = f.number.startsWith('JL') || f.number.startsWith('JAL');
    const isDeparted = f.diff < 0;

    const row = document.createElement('div');
    row.className = `flight-row ${isJal ? 'jal' : ''} ${isDeparted ? 'departed' : ''}`;

    const destText = isEnglish ? f.destEn : f.destJa;
    const statusText = isEnglish ? f.status.en : f.status.ja;

    row.innerHTML = `
      <div class="solari-plate col-flight ${contentChanged ? 'flipping' : ''}">${f.number}</div>
      <div class="solari-plate col-dest ${contentChanged ? 'flipping' : ''}">${destText}</div>
      <div class="solari-plate col-time ${contentChanged ? 'flipping' : ''}">${f.time}</div>
      <div class="solari-plate col-gate ${contentChanged ? 'flipping' : ''}">${f.gate}</div>
      <div class="solari-plate col-remarks ${contentChanged ? 'flipping' : ''}">${statusText}</div>
    `;

    container.appendChild(row);
  }
}

import { Mode, Kind, Period, View } from "../homepage";

export const VI: Record<string, string> = {
  //Mode enum
  [Mode.ReplaceAll]: "Thay thế tất cả ghi chú đang mở",
  [Mode.ReplaceLast]: "Thay thế ghi chú cuối cùng",
  [Mode.Retain]: "Giữ nguyên các ghi chú đang mở",

  //View enum
  //Ensure these terms are consistent with those used in base Obsidian!																	  
  [View.Default]: "Chế độ xem mặc định",
  [View.Reading]: "Chế độ đọc",
  [View.Source]: "Chế độ chỉnh sửa",
  [View.LivePreview]: "Chế độ chỉnh sửa",

  //Kind enum
  //Ensure these terms are consistent with those used in base Obsidian!																	  
  [Kind.File]: "Tệp",
  [Kind.Workspace]: "Khung làm việc",
  [Kind.Random]: "Tệp ngẫu nhiên",
  [Kind.RandomFolder]: "Ngẫu nhiên trong thư mục",
  [Kind.NewNote]: "Ghi chú mới",
  [Kind.Graph]: "Đồ thị",
  [Kind.None]: "Không có gì",
  [Kind.Journal]: "Nhật ký",
  [Kind.DailyNote]: "Ghi chú hàng ngày",
  [Kind.WeeklyNote]: "Ghi chú hàng tuần",
  [Kind.MonthlyNote]: "Ghi chú hàng tháng",
  [Kind.YearlyNote]: "Ghi chú hàng năm",

  //Period enum
  [Period.Both]: "Cả hai",
  [Period.Startup]: "Chỉ khi khởi động",
  [Period.Manual]: "Chỉ khi mở thủ công",

  //Commands
  openHomepage: "Mở trang chủ",
  setToActiveFile: "Đặt làm tệp hiện tại",
  copyDebugInfo: "Sao chép thông tin gỡ lỗi",

  //CLI commands
  cliOpenHomepageDesc: "Mở trang chủ",
  cliOpenHomepageResult: "Đã mở trang chủ",
  cliReadHomepageDesc: "Đọc nội dung trang chủ",
  cliReadHomepageIllegible: "Không thể xem trang chủ hiện tại vì nó không khớp với bất kỳ tệp nào",

  //General UI messages
  pluginUnavailable: `Không thể mở trang chủ do plugin cần thiết không khả dụng.`,
  journalUnavailable: `Không tìm thấy nhật ký "?0" để dùng làm trang chủ.`,
  workspaceUnavailable: `Không tìm thấy khung làm việc "?0" để dùng làm trang chủ.`,
  noteUnavailable: `Không tìm thấy tệp "?0" để dùng làm trang chủ.`,
  homepageChanged: `Trang chủ đã được thay đổi thành "?0".`,
  momentUpgradeNotice: `Ghi chú phụ thuộc ngày trong Homepage đã bị xóa. Hãy đặt trang chủ của bạn là Ghi chú Định kỳ hoặc Hàng ngày.`,

  //Settings items
  openOnStartup: "Mở khi khởi động",
  openOnStartupDesc: "Khi mở Obsidian, tự động mở trang chủ.",
  openOnStartupWarn: `Điều này sẽ ghi đè cài đặt "Tệp mặc định để mở" có sẵn.`,
  openWhenEmpty: "Mở khi không có tab nào",
  openWhenEmptyDesc: "Khi không có tab nào đang mở, tự động mở trang chủ.",
  alwaysApply: "Dùng khi mở bình thường",
  alwaysApplyDesc: "Áp dụng cài đặt trang chủ khi mở nó theo cách thông thường, ví dụ qua liên kết hoặc trình duyệt tệp.",
  separateMobile: "Trang chủ riêng cho di động",
  separateMobileDesc: "Trên thiết bị di động, lưu trang chủ và cài đặt của nó riêng biệt.",
  separateMobileWarnPrefix: "Cài đặt di động được lưu riêng biệt.",
  separateMobileWarnMobile: "Do đó, các thay đổi với cài đặt khác sẽ không ảnh hưởng đến thiết bị máy tính. Để chỉnh sửa cài đặt máy tính, hãy dùng máy tính.",
  separateMobileWarnDesktop: "Do đó, các thay đổi với cài đặt khác sẽ không ảnh hưởng đến thiết bị di động. Để chỉnh sửa cài đặt di động, hãy dùng thiết bị di động.",

  commandsGroup: "Lệnh",
  commandsDesc: "Chọn các lệnh sẽ được thực thi khi mở trang chủ.",
  commandsAddButton: "Thêm...",
  commandUnavailable: "Không tìm thấy lệnh này, nên nó sẽ không được thực thi. Có thể nó thuộc về một plugin đã tắt.",
  commandsReally: "Bạn có chắc không?",

  vaultGroup: "Môi trường vault",
  openMode: "Phương thức mở",
  openModeDesc: "Xác định cách các tab và giao diện hiện có bị ảnh hưởng khi khởi động.",
  manualOpenMode: "Phương thức mở thủ công",
  manualOpenModeDesc: "Xác định cách các tab và giao diện hiện có bị ảnh hưởng khi mở bằng lệnh hoặc nút ribbon.",
  pin: "Ghim",
  pinDesc: "Ghim trang chủ khi mở.",
  hideReleaseNotes: "Ẩn ghi chú phát hành",
  hideReleaseNotesDesc: "Không hiển thị ghi chú phát hành khi Obsidian cập nhật.",
  autoCreate: "Tự động tạo",
  autoCreateDesc: "Khi trang chủ không tồn tại, tự động tạo ghi chú với tên đó.",
  autoCreateWarn: "Nếu vault này được đồng bộ bằng các dịch vụ không chính thức, điều này có thể dẫn đến nội dung bị ghi đè.",

  openingGroup: "Giao diện khi mở",
  view: "Chế độ xem trang chủ",
  viewDesc: "Chọn chế độ xem để mở trang chủ.",
  revertView: "Khôi phục chế độ xem khi đóng",
  revertViewDesc: "Khi điều hướng khỏi trang chủ, khôi phục chế độ xem mặc định.",
  autoScroll: "Tự động cuộn",
  autoScrollDesc: "Khi mở trang chủ, tự động cuộn xuống cuối và đặt con trỏ ở dòng cuối",
  refreshDataview: "Làm mới Dataview",
  refreshDataviewDesc: "Luôn thử tải lại các giao diện Dataview khi mở trang chủ",
  refreshDataviewWarn: "Yêu cầu tính năng tự động làm mới của Dataview phải được bật.",

  //Settings UI messages
  "FileDesc": "Nhập tên ghi chú, base hoặc canvas để sử dụng.",
  "WorkspaceDesc": "Nhập tên khung làm việc Obsidian để sử dụng.",
  "New noteDesc": "Nhập tiền tố để sử dụng. Một ghi chú với tiền tố đó sẽ được tạo cho mỗi phiên Obsidian.",
  "Graph viewDesc": "Đồ thị của bạn sẽ được sử dụng.",
  "NothingDesc": "Mặc định sẽ không có gì xảy ra. Các lệnh đã thêm vẫn sẽ được thực thi.",
  "Random fileDesc": "Một ghi chú, base hoặc canvas ngẫu nhiên trong thư mục Obsidian của bạn sẽ được chọn.",
  "Random in folderDesc": "Nhập tên thư mục. Một ghi chú, base hoặc canvas ngẫu nhiên trong đó sẽ được chọn.",
  "JournalDesc": "Nhập tên nhật ký để sử dụng.",
  "Daily noteDesc": "Ghi chú Hàng ngày hoặc Ghi chú Định kỳ Hàng ngày của bạn sẽ được sử dụng.",
  "Weekly noteDesc": "Ghi chú Định kỳ Hàng tuần của bạn sẽ được sử dụng.",
  "Monthly noteDesc": "Ghi chú Định kỳ Hàng tháng của bạn sẽ được sử dụng.",
  "Yearly noteDesc": "Ghi chú Định kỳ Hàng năm của bạn sẽ được sử dụng.",
  homepageSettingTitle: "Trang chủ",
  pluginUnavailableSettings: `Plugin cần thiết cho loại trang chủ này không khả dụng.`,
  copyDebugInfoNotice: "Đã sao chép thông tin gỡ lỗi trang chủ vào clipboard",
};
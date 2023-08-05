const groups = [
  {
    index: "1",
    content: "Tài liệu tổng hợp",
  },
  {
    index: "2",
    content: "Tài liệu quy hoạch, kế hoạch, thống kê",
    subitems: [
      {
        index: "2.1",
        content: "Tài liệu quy hoạch",
      },
      {
        index: "2.2",
        content: "Tài liệu kế hoạch",
      },
      {
        index: "2.3",
        content: "Tài liệu thống kê",
      },
    ],
  },
  {
    index: "3",
    content: "Tài liệu tổ chức, nhân sự",
  },
  {
    index: "4",
    content: "Tài liệu lao động, tiền lương",
    subitems: [
      {
        index: "4.1",
        content: "Tài liệu lao động",
      },
      {
        index: "4.2",
        content: "Tài liệu tiền lương",
      },
    ],
  },
  {
    index: "5",
    content: "Tài liệu tài chính, kế toán",
  },
  {
    index: "6",
    content: "Tài liệu xây dựng cơ bản",
  },
  {
    index: "7",
    content: "Tài liệu khoa học công nghệ",
  },
  {
    index: "8",
    content: "Tài liệu hợp tác quốc tế",
  },
  {
    index: "9",
    content: "Tài liệu thanh tra và giải quyết khiếu nại, tố cáo",
  },
  {
    index: "10",
    content: "Tài liệu thi đua, khen thưởng",
  },
  {
    index: "11",
    content: "Tài liệu pháp chế",
  },
  {
    index: "12",
    content: "Tài liệu về hành chính, quản trị công sở",
    subitems: [
      {
        index: "12.1",
        content: "Tài liệu về hành chính, văn thư, lưu trữ",
      },
      {
        index: "12.2",
        content: "Tài liệu quản trị công sở",
      },
    ],
  },
  {
    index: "13",
    content: "Tài liệu các lĩnh vực chuyên môn nghiệp vụ",
  },
  {
    index: "14",
    content: "Tài liệu của tổ chức Đảng và các Đoàn thể cơ quan",
    subitems: [
      {
        index: "14.1",
        content: "Tài liệu của tổ chức Đảng",
      },
      {
        index: "14.2",
        content: "Tài liệu tổ chức Công đoàn",
      },
      {
        index: "14.3",
        content: "Tài liệu tổ chức Đoàn Thanh niên",
      },
    ],
  },
];

const items = [
  {
    content: "Tập văn bản gửi chung đến các cơ quan",
    duration: "",
    group: "1",
    items: [
      {
        content: "Chủ trương, đường lối của Đảng và pháp luật của Nhà nước (hồ sơ nguyên tắc)",
        duration: "Đến khi văn bản hết hiệu lực thi hành",
      },
      {
        content: "Gửi để biết (đổi tên cơ quan, đổi trụ sở, đổi dấu, thông báo chữ ký...)",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ xây dựng, ban hành chế độ/quy định/hướng dẫn những vấn đề chung của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "1",
    items: [],
  },
  {
    content: "Hồ sơ kỷ niệm các ngày lễ lớn, sự kiện quan trọng do cơ quan chủ trì tổ chức",
    duration: "Vĩnh viễn",
    group: "1",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị tổng kết, sơ kết công tác của ngành, cơ quan",
    duration: "",
    group: "1",
    items: [
      {
        content: "Tổng kết năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Sơ kết tháng, quý, 6 tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Kế hoạch, báo cáo công tác hàng năm",
    duration: "",
    group: "1",
    items: [
      {
        content: "Của cơ quan cấp trên",
        duration: "10 năm",
      },
      {
        content: "Của cơ quan và các đơn vị trực thuộc",
        duration: "Vĩnh viễn",
      },
      {
        content: "Của đơn vị chức năng",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Kế hoạch, báo cáo công tác quý, 6 tháng, 9 tháng",
    duration: "",
    group: "1",
    items: [
      {
        content: "Của cơ quan cấp trên",
        duration: "5 năm",
      },
      {
        content: "Của cơ quan và các đơn vị trực thuộc",
        duration: "20 năm",
      },
      {
        content: "Của đơn vị chức năng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Kế hoạch, báo cáo tháng, tuần",
    duration: "",
    group: "1",
    items: [
      {
        content: "Của cơ quan cấp trên",
        duration: "5 năm",
      },
      {
        content: "Của cơ quan và các đơn vị trực thuộc",
        duration: "10 năm",
      },
      {
        content: "Của đơn vị chức năng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Kế hoạch, báo cáo công tác đột xuất",
    duration: "10 năm",
    group: "1",
    items: [],
  },
  {
    content: "Hồ sơ tổ chức thực hiện chủ trương, đường lối của Đảng và pháp luật của Nhà nước",
    duration: "Vĩnh viễn",
    group: "1",
    items: [],
  },
  {
    content: "Hồ sơ tổ chức thực hiện chế độ/quy định/hướng dẫn những vấn đề chung của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "1",
    items: [],
  },
  {
    content: "Hồ sơ ứng dụng ISO của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "1",
    items: [],
  },
  {
    content: "Tài liệu về công tác thông tin, tuyên truyền của cơ quan",
    duration: "Vĩnh viễn",
    group: "1",
    items: [
      {
        content: "Văn bản chỉ đạo, chương trình, kế hoạch, báo cáo năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Kế hoạch, báo cáo tháng, quý, công văn trao đổi",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Tài liệu về hoạt động của Lãnh đạo (báo cáo, bản thuyết trình/giải trình, trả lời chất vấn tại Quốc hội, bài phát biểu tại các sự kiện lớn …)",
    duration: "Vĩnh viễn",
    group: "1",
    items: [],
  },
  {
    content: "Tập thông báo ý kiến, kết luận cuộc họp",
    duration: "10 năm",
    group: "1",
    items: [],
  },
  {
    content: "Sổ ghi biên bản các cuộc họp giao ban, sổ tay công tác của lãnh đạo cơ quan, thư ký lãnh đạo",
    duration: "",
    group: "1",
    items: [
      {
        content: "Bộ, cơ quan ngang bộ và tương đương",
        duration: "Vĩnh viễn",
      },
      {
        content: "UBND tỉnh và tương đương",
        duration: "Vĩnh viễn",
      },
      {
        content: "Cơ quan, tổ chức khác",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Tập công văn trao đổi về những vấn đề chung",
    duration: "10 năm",
    group: "1",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác quy hoạch, kế hoạch, thống kê",
    duration: "",
    group: "2",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Tập văn bản về quy hoạch gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "2.1",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng quy hoạch phát triển ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "2.1",
    items: [],
  },
  {
    content: "Hồ sơ về xây dựng đề án, dự án, chương trình mục tiêu của ngành, cơ quan được phê duyệt",
    duration: "Vĩnh viễn",
    group: "2.1",
    items: [],
  },
  {
    content: "Hồ sơ quản lý, tổ chức thực hiện các đề án, dự án, chương trình mục tiêu của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "2.1",
    items: [],
  },
  {
    content:
      "Hồ sơ thẩm định, phê duyệt đề án chiến lược, đề án quy hoạch phát triển, đề án, dự án, chương trình mục tiêu của các đối tượng thuộc phạm vi quản lý của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "2.1",
    items: [],
  },
  {
    content: "Báo cáo đánh giá thực hiện các đề án chiến lược, đề án, quy hoạch phát triển, đề án, dự án, chương trình, mục tiêu của các đối tượng thuộc phạm vi quản lý nhà nước",
    duration: "",
    group: "2.1",
    items: [
      {
        content: "Tổng kết",
        duration: "Vĩnh viễn",
      },
      {
        content: "Sơ kết",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Công văn trao đổi về công tác quy hoạch",
    duration: "10 năm",
    group: "2.1",
    items: [],
  },
  {
    content: "Tập văn bản về kế hoạch gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "2.2",
    items: [],
  },
  {
    content: "Chỉ tiêu kế hoạch phát triển kinh tế - xã hội hàng năm",
    duration: "",
    group: "2.2",
    items: [
      {
        content: "Cơ quan ban hành",
        duration: "Vĩnh viễn",
      },
      {
        content: "Cơ quan thực hiện",
        duration: "Vĩnh viễn",
      },
      {
        content: "Cơ quan để biết",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ xây dựng kế hoạch và báo cáo thực hiện kế hoạch của ngành, cơ quan",
    duration: "",
    group: "2.2",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Kế hoạch và báo cáo thực hiện kế hoạch của các đơn vị trực thuộc",
    duration: "",
    group: "2.2",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ chỉ đạo, kiểm tra việc thực hiện kế hoạch",
    duration: "20 năm",
    group: "2.2",
    items: [],
  },
  {
    content: "Kế hoạch báo cáo thực hiện kế hoạch của các đối tượng thuộc phạm vi quản lý về kế hoạch",
    duration: "",
    group: "2.2",
    items: [
      {
        content: "Hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Quý, 6 tháng, 9 tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Công văn trao đổi về công tác kế hoạch",
    duration: "10 năm",
    group: "2.2",
    items: [],
  },
  {
    content: "Tập văn bản về thống kê gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "2.3",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành các văn bản chế độ/ quy định, hướng dẫn về thống kê của ngành",
    duration: "Vĩnh viễn",
    group: "2.3",
    items: [],
  },
  {
    content: "Báo cáo thống kê tổng hợp, thống kê chuyên đề",
    duration: "",
    group: "2.3",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Quý, 6 tháng, 9 tháng",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Báo cáo điều tra cơ bản",
    duration: "",
    group: "2.3",
    items: [
      {
        content: "Báo cáo tổng hợp",
        duration: "Vĩnh viễn",
      },
      {
        content: "Báo cáo cơ sở, phiếu điều tra",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Báo cáo phân tích và dự báo",
    duration: "Vĩnh viễn",
    group: "2.3",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác thống kê, điều tra",
    duration: "10 năm",
    group: "2.3",
    items: [],
  },
  {
    content: "Tập văn bản về công tác tổ chức, cán bộ gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành Điều lệ tổ chức, Quy chế làm việc, chế độ/quy định, hướng dẫn về tổ chức, cán bộ",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác tổ chức, cán bộ",
    duration: "",
    group: "3",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ xây dựng đề án tổ chức ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ về việc thành lập, đổi tên, thay đổi chức năng, nhiệm vụ, quyền hạn của cơ quan và các đơn vị trực thuộc",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ về việc hợp nhất, sáp nhập, chia tách, giải thể cơ quan và các đơn vị trực thuộc",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành tiêu chuẩn chức danh công chức, viên chức",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ về xây dựng và thực hiện chỉ tiêu biên chế",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Báo cáo thống kê danh sách, số lượng, chất lượng cán bộ",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ về quy hoạch cán bộ",
    duration: "20 năm",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ về việc bổ nhiệm, đề bạt, điều động, luân chuyển cán bộ",
    duration: "70 năm",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ về việc thi tuyển, thi nâng ngạch, kiểm tra chuyển ngạch hàng năm",
    duration: "",
    group: "3",
    items: [
      {
        content: "Báo cáo kết quả, danh sách trúng tuyển",
        duration: "20 năm",
      },
      {
        content: "Hồ sơ dự thi, bài thi, tài liệu tổ chức thi",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ kỷ luật cán bộ",
    duration: "70 năm",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ giải quyết chế độ (hưu trí, tử tuất, tai nạn lao động, bệnh nghề nghiệp, bảo hiểm xã hội …)",
    duration: "70 năm",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ gốc cán bộ, công chức, viên chức",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Sổ, phiếu quản lý hồ sơ cán bộ",
    duration: "70 năm",
    group: "3",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác đào tạo, bồi dưỡng cán bộ của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "3",
    items: [],
  },
  {
    content: "Tài liệu quản lý các cơ sở đào tạo, dạy nghề trực thuộc",
    duration: "",
    group: "3",
    items: [
      {
        content: "Văn bản chỉ đạo, chương trình, kế hoạch, báo cáo năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Kế hoạch, báo cáo tháng, quý, công văn trao đổi, tư liệu, tham khảo",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ tổ chức các lớp bồi dưỡng cán bộ",
    duration: "10 năm",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ về công tác bảo vệ chính trị nội bộ",
    duration: "20 năm",
    group: "3",
    items: [],
  },
  {
    content: "Hồ sơ hoạt động của Ban Vì sự tiến bộ phụ nữ",
    duration: "10 năm",
    group: "3",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác tổ chức, cán bộ",
    duration: "10 năm",
    group: "3",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác lao động, tiền lương",
    duration: "",
    group: "4",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Tập văn bản về lao động gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "4.1",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành định mức lao động của ngành và báo cáo thực hiện",
    duration: "Vĩnh viễn",
    group: "4.1",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng chế độ bảo hộ, an toàn, vệ sinh lao động của ngành",
    duration: "Vĩnh viễn",
    group: "4.1",
    items: [],
  },
  {
    content: "Hồ sơ các vụ tai nạn lao động",
    duration: "Vĩnh viễn",
    group: "4.1",
    items: [
      {
        content: "Nghiêm trọng",
        duration: "Vĩnh viễn",
      },
      {
        content: "Không nghiêm trọng",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Hợp đồng lao động vụ việc",
    duration: "5 năm sau khi chấm dứt Hợp đồng",
    group: "4.1",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác lao động",
    duration: "10 năm",
    group: "4.1",
    items: [],
  },
  {
    content: "Tập văn bản về tiền lương gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "4.2",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành thang bảng lương của ngành và báo cáo thực hiện",
    duration: "Vĩnh viễn",
    group: "4.2",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành chế độ phụ cấp của ngành và báo cáo thực hiện",
    duration: "Vĩnh viễn",
    group: "4.2",
    items: [],
  },
  {
    content: "Hồ sơ nâng lương của cán bộ, công chức, viên chức",
    duration: "20 năm",
    group: "4.2",
    items: [],
  },
  {
    content: "Công văn trao đổi về tiền lương",
    duration: "10 năm",
    group: "4.2",
    items: [],
  },
  {
    content: "Tập văn bản về tài chính, kế toán gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "5",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành chế độ/quy định về tài chính, kế toán",
    duration: "Vĩnh viễn",
    group: "5",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác tài chính, kế toán",
    duration: "",
    group: "5",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ về ngân sách nhà nước hàng năm của cơ quan và các đơn vị trực thuộc",
    duration: "Vĩnh viễn",
    group: "5",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo tài chính và quyết toán",
    duration: "",
    group: "5",
    items: [
      {
        content: "Hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tháng, quý, 6 tháng, 9 tháng",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Hồ sơ xây dựng chế độ/quy định về giá",
    duration: "Vĩnh viễn",
    group: "5",
    items: [],
  },
  {
    content: "Báo cáo kiểm kê, đánh giá lại tài sản cố định, thanh toán công nợ",
    duration: "20 năm",
    group: "5",
    items: [],
  },
  {
    content: "Hồ sơ, tài liệu về việc chuyển nhượng, bàn giao, thanh lý tài sản cố định",
    duration: "",
    group: "5",
    items: [
      {
        content: "Nhà đất",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tài sản khác",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Hồ sơ kiểm tra, thanh tra tài chính tại cơ quan và các đơn vị trực thuộc",
    duration: "",
    group: "5",
    items: [
      {
        content: "Vụ việc nghiêm trọng",
        duration: "Vĩnh viễn",
      },
      {
        content: "Vụ việc khác",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ kiểm toán tại cơ quan và các đơn vị trực thuộc",
    duration: "",
    group: "5",
    items: [
      {
        content: "Vụ việc nghiêm trọng",
        duration: "Vĩnh viễn",
      },
      {
        content: "Vụ việc khác",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Sổ sách kế toán",
    duration: "",
    group: "5",
    items: [
      {
        content: "Sổ tổng hợp",
        duration: "20 năm",
      },
      {
        content: "Sổ chi tiết",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Chứng từ kế toán sử dụng trực tiếp để ghi sổ kế toán và lập báo cáo tài chính",
    duration: "10 năm",
    group: "5",
    items: [],
  },
  {
    content: "Chứng từ kế toán không sử dụng trực tiếp để ghi sổ kế toán và lập báo cáo tài chính",
    duration: "5 năm",
    group: "5",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác tài chính, kế toán",
    duration: "10 năm",
    group: "5",
    items: [],
  },
  {
    content: "Tập văn bản về xây dựng cơ bản gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "6",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng văn bản chế độ/ quy định, hướng dẫn về xây dựng cơ bản của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "6",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác đầu tư xây dựng cơ bản",
    duration: "",
    group: "6",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ công trình xây dựng cơ bản",
    duration: "",
    group: "6",
    items: [
      {
        content:
          "Công trình nhóm A, công trình áp dụng các giải pháp mới về kiến trúc, kết cấu, công nghệ, thiết bị, vật liệu mới; công trình xây dựng trong điều kiện địa chất, địa hình đặc biệt công trình được xếp hạng di tích lịch sử văn hóa;",
        duration: "Vĩnh viễn",
      },
      {
        content: "Công trình nhóm B, C và sửa chữa lớn",
        duration: "Theo tuổi thọ công trình",
      },
    ],
  },
  {
    content: "Hồ sơ sửa chữa nhỏ các công trình",
    duration: "15 năm",
    group: "6",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác xây dựng cơ bản",
    duration: "10 năm",
    group: "6",
    items: [],
  },
  {
    content: "Tập văn bản về hoạt động khoa học công nghệ gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "7",
    items: [],
  },
  {
    content: "Hồ sơ về việc xây dựng quy chế hoạt động khoa học công nghệ của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "7",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị, hội thảo khoa học do cơ quan tổ chức",
    duration: "Vĩnh viễn",
    group: "7",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác khoa học, công nghệ",
    duration: "",
    group: "7",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ hoạt động của Hội đồng khoa học ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "7",
    items: [],
  },
  {
    content: "Hồ sơ chương trình, đề tài nghiên cứu khoa học",
    duration: "",
    group: "7",
    items: [
      {
        content: "Cấp nhà nước",
        duration: "Vĩnh viễn",
      },
      {
        content: "Cấp bộ, ngành",
        duration: "Vĩnh viễn",
      },
      {
        content: "Cấp cơ sở",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ sáng kiến, cải tiến kỹ thuật, quy trình công nghệ hoặc giải pháp hữu ích được công nhận",
    duration: "",
    group: "7",
    items: [
      {
        content: "Cấp nhà nước",
        duration: "Vĩnh viễn",
      },
      {
        content: "Cấp bộ, ngành",
        duration: "Vĩnh viễn",
      },
      {
        content: "Cấp cơ sở",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ xây dựng các tiêu chuẩn ngành",
    duration: "Vĩnh viễn",
    group: "7",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, triển khai ứng dụng khoa học công nghệ của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "7",
    items: [],
  },
  {
    content: "Các báo cáo khoa học chuyên đề do cơ quan thực hiện để tham gia các hội thảo khoa học",
    duration: "20 năm",
    group: "7",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng và quản lý các cơ sở dữ liệu của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "7",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác khoa học, công nghệ",
    duration: "10 năm",
    group: "7",
    items: [],
  },
  {
    content: "Tập văn bản về hợp tác quốc tế gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "8",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị, hội thảo quốc tế do cơ quan chủ trì",
    duration: "Vĩnh viễn",
    group: "8",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác hợp tác quốc tế",
    duration: "",
    group: "8",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ xây dựng chương trình, dự án hợp tác quốc tế của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "8",
    items: [],
  },
  {
    content: "Hồ sơ về việc thiết lập quan hệ hợp tác với các cơ quan, tổ chức nước ngoài",
    duration: "Vĩnh viễn",
    group: "8",
    items: [],
  },
  {
    content: "Hồ sơ gia nhập thành viên các hiệp hội, tổ chức quốc tế",
    duration: "Vĩnh viễn",
    group: "8",
    items: [],
  },
  {
    content: "Hồ sơ về việc tham gia các hoạt động của hiệp hội, tổ chức quốc tế (hội nghị, hội thảo, điều tra, khảo sát, thống kê …)",
    duration: "Vĩnh viễn",
    group: "8",
    items: [],
  },
  {
    content: "Hồ sơ niên liễm, đóng góp cho các hiệp hội, tổ chức quốc tế",
    duration: "Vĩnh viễn",
    group: "8",
    items: [],
  },
  {
    content: "Hồ sơ đoàn ra",
    duration: "",
    group: "8",
    items: [
      {
        content: "Ký kết hợp tác",
        duration: "Vĩnh viễn",
      },
      {
        content: "Hội thảo, triển lãm, học tập, khảo sát …",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Hồ sơ đoàn vào",
    duration: "",
    group: "8",
    items: [
      {
        content: "Ký kết hợp tác",
        duration: "Vĩnh viễn",
      },
      {
        content: "Hội thảo, triển lãm, học tập, khảo sát …",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Thư, điện, thiếp chúc mừng của các cơ quan, tổ chức nước ngoài",
    duration: "",
    group: "8",
    items: [
      {
        content: "Quan trọng",
        duration: "Vĩnh viễn",
      },
      {
        content: "Thông thường",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Công văn trao đổi về công tác hợp tác quốc tế",
    duration: "10 năm",
    group: "8",
    items: [],
  },
  {
    content: "Tập văn bản về thanh tra và giải quyết khiếu nại, tố cáo gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "9",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành quy chế/quy định, hướng dẫn về thanh tra và giải quyết khiếu nại, tố cáo",
    duration: "Vĩnh viễn",
    group: "9",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác thanh tra và giải quyết khiếu nại, tố cáo",
    duration: "",
    group: "9",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Báo cáo công tác phòng chống tham nhũng",
    duration: "",
    group: "9",
    items: [
      {
        content: "Hàng năm",
        duration: "20 năm",
      },
      {
        content: "Tháng, quý, sáu tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ thanh tra các vụ việc",
    duration: "",
    group: "9",
    items: [
      {
        content: "Vụ việc nghiêm trọng",
        duration: "Vĩnh viễn",
      },
      {
        content: "Vụ việc khác",
        duration: "15 năm",
      },
    ],
  },
  {
    content: "Hồ sơ giải quyết các vụ việc khiếu nại, tố cáo",
    duration: "",
    group: "9",
    items: [
      {
        content: "Vụ việc nghiêm trọng",
        duration: "Vĩnh viễn",
      },
      {
        content: "Vụ việc khác",
        duration: "15 năm",
      },
    ],
  },
  {
    content: "Tài liệu về hoạt động của tổ chức Thanh tra nhân dân",
    duration: "",
    group: "9",
    items: [
      {
        content: "Báo cáo năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tài liệu khác",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Công văn trao đổi về công tác thanh tra, giải quyết khiếu nại, tố cáo",
    duration: "10 năm",
    group: "9",
    items: [],
  },
  {
    content: "Tập văn bản về thi đua, khen thưởng gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "10",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành quy chế/quy định, hướng dẫn về thi đua, khen thưởng",
    duration: "Vĩnh viễn",
    group: "10",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị thi đua do cơ quan chủ trì tổ chức",
    duration: "Vĩnh viễn",
    group: "10",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác thi đua, khen thưởng",
    duration: "",
    group: "10",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "6 tháng, 9 tháng",
        duration: "20 năm",
      },
      {
        content: "Quý, tháng",
        duration: "5 năm",
      },
    ],
  },
  {
    content: "Hồ sơ tổ chức thực hiện phong trào thi đua nhân các dịp kỷ niệm",
    duration: "10 năm",
    group: "10",
    items: [],
  },
  {
    content: "Hồ sơ khen thưởng cho tập thể, cá nhân",
    duration: "",
    group: "10",
    items: [
      {
        content: "Các hình thức khen thưởng của Chủ tịch Nước và Thủ tướng Chính phủ",
        duration: "Vĩnh viễn",
      },
      {
        content: "Các hình thức khen thưởng của Bộ trưởng, Thủ trưởng cơ quan ngang Bộ, cơ quan thuộc Chính phủ, Chủ tịch UBND cấp tỉnh và tương đương",
        duration: "20 năm",
      },
      {
        content: "Các hình thức khen thưởng của người đứng đầu cơ quan, tổ chức",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ khen thưởng đối với người nước ngoài",
    duration: "Vĩnh viễn",
    group: "10",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác thi đua, khen thưởng",
    duration: "10 năm",
    group: "10",
    items: [],
  },
  {
    content: "Tập văn bản về công tác pháp chế gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "11",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành quy định, hướng dẫn về công tác pháp chế do cơ quan chủ trì",
    duration: "Vĩnh viễn",
    group: "11",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị công tác pháp chế, phổ biến văn bản quy phạm pháp luật",
    duration: "10 năm",
    group: "11",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác pháp chế",
    duration: "",
    group: "11",
    items: [
      {
        content: "Dài hạn, hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tháng, quý, 6 tháng",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Hồ sơ thẩm định văn bản quy phạm pháp luật",
    duration: "Vĩnh viễn",
    group: "11",
    items: [],
  },
  {
    content: "Hồ sơ về việc góp ý xây dựng văn bản quy phạm pháp luật do cơ quan khác chủ trì",
    duration: "5 năm",
    group: "11",
    items: [],
  },
  {
    content: "Hồ sơ về việc rà soát văn bản quy phạm pháp luật",
    duration: "10 năm",
    group: "11",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác pháp chế",
    duration: "10 năm",
    group: "11",
    items: [],
  },
  {
    content: "Tập văn bản về công tác hành chính, văn thư, lưu trữ gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "12.1",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành quy định, hướng dẫn công tác hành chính, văn thư, lưu trữ",
    duration: "Vĩnh viễn",
    group: "12.1",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị công tác hành chính văn phòng, văn thư, lưu trữ do cơ quan tổ chức",
    duration: "10 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo công tác hành chính, văn thư, lưu trữ",
    duration: "",
    group: "12.1",
    items: [
      {
        content: "Năm, nhiều năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Quý, tháng",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ thực hiện cải cách hành chính",
    duration: "20 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Hồ sơ về lập, ban hành Danh mục bí mật nhà nước của ngành, cơ quan",
    duration: "Vĩnh viễn",
    group: "12.1",
    items: [],
  },
  {
    content: "Hồ sơ kiểm tra, hướng dẫn nghiệp vụ hành chính, văn thư, lưu trữ",
    duration: "20 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Báo cáo thống kê văn thư, lưu trữ và tài liệu lưu trữ",
    duration: "20 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Hồ sơ tổ chức thực hiện các hoạt động nghiệp vụ lưu trữ (thu thập, bảo quản, chỉnh lý, khai thác sử dụng …)",
    duration: "20 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Hồ sơ về quản lý và sử dụng con dấu",
    duration: "20 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Tập lưu, sổ đăng ký văn bản đi của cơ quan",
    duration: "",
    group: "12.1",
    items: [
      {
        content: "Văn bản quy phạm pháp luật",
        duration: "Vĩnh viễn",
      },
      {
        content: "Chỉ thị, quyết định, quy định, quy chế, hướng dẫn",
        duration: "Vĩnh viễn",
      },
      {
        content: "Văn bản khác",
        duration: "50 năm",
      },
    ],
  },
  {
    content: "Sổ đăng ký văn bản đến",
    duration: "20 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Công văn trao đổi về hành chính, văn thư, lưu trữ",
    duration: "10 năm",
    group: "12.1",
    items: [],
  },
  {
    content: "Tập văn bản về công tác quản trị công sở gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành các quy định, quy chế về công tác quản trị công sở",
    duration: "Vĩnh viễn",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị công chức, viên chức",
    duration: "20 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ tổ chức thực hiện nếp sống văn hóa công sở",
    duration: "10 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ về công tác quốc phòng toàn dân, dân quân tự vệ của cơ quan",
    duration: "10 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ về phòng chống cháy, nổ, thiên tai … của cơ quan",
    duration: "10 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ về công tác bảo vệ trụ sở cơ quan",
    duration: "10 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ về sử dụng, vận hành ôtô, máy móc, thiết bị của cơ quan",
    duration: "Theo tuổi thọ thiết bị",
    group: "12.2",
    items: [],
  },
  {
    content: "Sổ sách cấp phát đồ dùng, văn phòng phẩm",
    duration: "5 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Hồ sơ về công tác y tế của cơ quan",
    duration: "10 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác quản trị công sở",
    duration: "10 năm",
    group: "12.2",
    items: [],
  },
  {
    content: "Tập văn bản về chuyên môn nghiệp vụ gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "13",
    items: [],
  },
  {
    content: "Hồ sơ xây dựng, ban hành văn bản quản lý chuyên môn nghiệp vụ",
    duration: "Vĩnh viễn",
    group: "13",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị về chuyên môn nghiệp vụ do cơ quan tổ chức",
    duration: "Vĩnh viễn",
    group: "13",
    items: [],
  },
  {
    content: "Kế hoạch, báo cáo về chuyên môn nghiệp vụ của cơ quan và các đơn vị trực thuộc",
    duration: "",
    group: "13",
    items: [
      {
        content: "Hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tháng, quý, sáu tháng",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Kế hoạch, báo cáo về chuyên môn nghiệp vụ của các đối tượng thuộc phạm vi quản lý",
    duration: "",
    group: "13",
    items: [
      {
        content: "Hàng năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tháng, quý, sáu tháng",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ quản lý, tổ chức thực hiện các hoạt động chuyên môn nghiệp vụ",
    duration: "",
    group: "13",
    items: [
      {
        content: "Văn bản chỉ đạo, chương trình, kế hoạch, báo cáo năm",
        duration: "Vĩnh viễn",
      },
      {
        content: "Kế hoạch, báo cáo tháng, quý, công văn trao đổi",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ xây dựng, quản lý và tổ chức thực hiện các chương trình mục tiêu, dự án chuyên môn",
    duration: "Vĩnh viễn",
    group: "13",
    items: [],
  },
  {
    content: "Hồ sơ chỉ đạo điểm về chuyên môn nghiệp vụ",
    duration: "Vĩnh viễn",
    group: "13",
    items: [],
  },
  {
    content: "Hồ sơ kiểm tra, hướng dẫn chuyên môn nghiệp vụ",
    duration: "Vĩnh viễn",
    group: "13",
    items: [],
  },
  {
    content: "Hồ sơ giải quyết các vụ việc trong hoạt động quản lý chuyên môn nghiệp vụ",
    duration: "",
    group: "13",
    items: [
      {
        content: "Vụ việc quan trọng",
        duration: "Vĩnh viễn",
      },
      {
        content: "Vụ việc khác",
        duration: "20 năm",
      },
    ],
  },
  {
    content: "Báo cáo phân tích, thống kê chuyên đề",
    duration: "Vĩnh viễn",
    group: "13",
    items: [],
  },
  {
    content: "Sổ sách quản lý về chuyên môn nghiệp vụ",
    duration: "20 năm",
    group: "13",
    items: [],
  },
  {
    content: "Công văn trao đổi về chuyên môn nghiệp vụ",
    duration: "10 năm",
    group: "13",
    items: [],
  },
  {
    content: "Tập văn bản chỉ đạo, hướng dẫn của tổ chức Đảng cấp trên gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "14.1",
    items: [],
  },
  {
    content: "Hồ sơ Đại hội",
    duration: "Vĩnh viễn",
    group: "14.1",
    items: [],
  },
  {
    content: "Chương trình, kế hoạch và báo cáo công tác",
    duration: "",
    group: "14.1",
    items: [
      {
        content: "Tổng kết năm, nhiệm kỳ",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tháng, quý, 6 tháng",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ tổ chức thực hiện các cuộc vận động lớn, chỉ thị, nghị quyết của Trung ương và các cấp ủy Đảng",
    duration: "Vĩnh viễn",
    group: "14.1",
    items: [],
  },
  {
    content: "Hồ sơ về thành lập/ sáp nhập, công nhận tổ chức Đảng",
    duration: "Vĩnh viễn",
    group: "14.1",
    items: [],
  },
  {
    content: "Hồ sơ về tiếp nhận, bàn giao công tác Đảng",
    duration: "10 năm",
    group: "14.1",
    items: [],
  },
  {
    content: "Hồ sơ về hoạt động kiểm tra, giám sát",
    duration: "20 năm",
    group: "14.1",
    items: [],
  },
  {
    content: "Hồ sơ đánh giá, xếp loại tổ chức cơ sở Đảng, Đảng viên",
    duration: "70 năm",
    group: "14.1",
    items: [],
  },
  {
    content: "Hồ sơ đảng viên",
    duration: "70 năm",
    group: "14.1",
    items: [],
  },
  {
    content: "Sổ sách (đăng ký Đảng viên, Đảng phí, ghi biên bản)",
    duration: "20 năm",
    group: "14.1",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác Đảng",
    duration: "10  năm",
    group: "14.1",
    items: [],
  },
  {
    content: "Tập văn bản chỉ đạo, hướng dẫn của tổ chức Công đoàn cấp trên gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "14.2",
    items: [],
  },
  {
    content: "Hồ sơ Đại hội",
    duration: "Vĩnh viễn",
    group: "14.2",
    items: [],
  },
  {
    content: "Chương trình, kế hoạch và báo cáo công tác",
    duration: "",
    group: "14.2",
    items: [
      {
        content: "Tổng kết năm, nhiệm kỳ",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tháng, quý, 6 tháng",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ tổ chức thực hiện các cuộc vận động lớn, thực hiện nghị quyết của tổ chức Công đoàn",
    duration: "Vĩnh viễn",
    group: "14.2",
    items: [],
  },
  {
    content: "Tài liệu về tổ chức, nhân sự và các hoạt động của tổ chức Công đoàn",
    duration: "Vĩnh viễn",
    group: "14.2",
    items: [],
  },
  {
    content: "Hồ sơ hội nghị cán bộ, công chức, viên chức hàng năm của cơ quan",
    duration: "20 năm",
    group: "14.2",
    items: [],
  },
  {
    content: "Sổ sách",
    duration: "20 năm",
    group: "14.2",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác Công đoàn",
    duration: "10 năm",
    group: "14.2",
    items: [],
  },
  {
    content: "Tập văn bản chỉ đạo, hướng dẫn của tổ chức Đoàn cấp trên gửi chung đến các cơ quan (hồ sơ nguyên tắc)",
    duration: "Đến khi VB hết hiệu lực thi hành",
    group: "14.3",
    items: [],
  },
  {
    content: "Hồ sơ Đại hội",
    duration: "Vĩnh viễn",
    group: "14.3",
    items: [],
  },
  {
    content: "Chương trình, kế hoạch và báo cáo công tác",
    duration: "",
    group: "14.3",
    items: [
      {
        content: "Tổng kết năm, nhiệm kỳ",
        duration: "Vĩnh viễn",
      },
      {
        content: "Tháng, quý, 6 tháng",
        duration: "10 năm",
      },
    ],
  },
  {
    content: "Hồ sơ tổ chức thực hiện các cuộc vận động lớn, thực hiện nghị quyết của Đảng, Nhà nước, Đoàn Thanh niên",
    duration: "Vĩnh viễn",
    group: "14.3",
    items: [],
  },
  {
    content: "Tài liệu về tổ chức, nhân sự và các hoạt động của Đoàn Thanh niên cơ quan",
    duration: "20 năm",
    group: "14.3",
    items: [],
  },
  {
    content: "Sổ sách",
    duration: "20 năm",
    group: "14.3",
    items: [],
  },
  {
    content: "Công văn trao đổi về công tác Đoàn",
    duration: "10 năm",
    group: "14.3",
    items: [],
  },
];

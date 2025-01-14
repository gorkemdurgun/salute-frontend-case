export const tasks: Task[] = [
  {
    id: "1",
    title: "GoJo Satın Alımını Tamamla ve Anlaşmayı İmzala",
    description: "GoJo satın alımı için nihai anlaşma şartlarını hazırlayın. Tüm yasal onayların alındığından emin olun.",
    assigneeIds: [
      "3e10b298-788f-472b-87e8-e53468202e1d", // Logan Roy
      "0d631020-b9a5-4ece-9c60-d9239d23b4f2", // Gerri Kellman
    ],
    storyPoints: 13,
    startDate: "2025-01-03",
    dueDate: "2025-01-05",
    status: 1,
  },
  {
    id: "2",
    title: "Yönetim Kurulu Onayı Al",
    description: "Yönetim kurulunu satın alımı onaylamaya ikna edin. Ayrıntılı bir sunum hazırlayın.",
    assigneeIds: [
      "85bc575d-0c9b-4c30-9202-1e118767c583", // Kendall Roy
      "a9b155c6-6f44-494f-84b5-2ef372bb3cdb", // Frank Vernon
    ],
    storyPoints: 8,
    startDate: "2025-01-12",
    dueDate: "2025-01-18",
    status: 0,
  },
  {
    id: "3",
    title: "Hukuki Riskleri İncele",
    description: "Satın alımla ilgili yasal riskleri analiz edin ve hukuk ekibiyle koordinasyon sağlayın.",
    assigneeIds: [
      "0d631020-b9a5-4ece-9c60-d9239d23b4f2", // Gerri Kellman
    ],
    storyPoints: 5,
    startDate: "2025-01-11",
    dueDate: "2025-01-16",
    status: 0,
  },
  {
    id: "4",
    title: "Çalışanlarla Toplantı Düzenle",
    description: "Satın alımla ilgili çalışanların endişelerini gidermek için bir toplantı organize edin.",
    assigneeIds: [
      "69643af1-9bb2-4e71-9171-932463ab6163", // Shiv Roy
      "96d4036d-ae6b-4e0b-90e7-6864d79bc302", // Tom Wambsgans
    ],
    storyPoints: 8,
    startDate: "2025-01-13",
    dueDate: "2025-01-20",
    status: 0,
  },
  {
    id: "5",
    title: "Medya İlişkilerini Yönetin",
    description: "Satın alım hakkında olumlu bir imaj oluşturmak için basın bültenlerini ve röportajları yönetin.",
    assigneeIds: [
      "4011adc0-0fef-4d8b-8ced-6a48ba372b94", // Roman Roy
      "69643af1-9bb2-4e71-9171-932463ab6163", // Shiv Roy
    ],
    storyPoints: 5,
    startDate: "2025-01-12",
    dueDate: "2025-01-17",
    status: 2,
  },
  {
    id: "6",
    title: "Finansal Raporları Hazırla",
    description: "Satın alım sunumu için gerekli finansal raporları derleyin ve gözden geçirin.",
    assigneeIds: [
      "a9b155c6-6f44-494f-84b5-2ef372bb3cdb", // Frank Vernon
      "3e10b298-788f-472b-87e8-e53468202e1d", // Logan Roy
    ],
    storyPoints: 8,
    startDate: "2025-01-10",
    dueDate: "2025-01-14",
    status: 3,
  },
  {
    id: "7",
    title: "Hissedar Mücadelesi Risklerini Değerlendir",
    description: "Hissedarların potansiyel bir itiraz stratejisini değerlendirin ve buna karşı strateji geliştirin.",
    assigneeIds: [
      "96d4036d-ae6b-4e0b-90e7-6864d79bc302", // Tom Wambsgans
      "85bc575d-0c9b-4c30-9202-1e118767c583", // Kendall Roy
    ],
    storyPoints: 3,
    startDate: "2025-01-14",
    dueDate: "2025-01-20",
    status: 0,
  },
];

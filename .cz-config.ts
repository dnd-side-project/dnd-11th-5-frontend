module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:     새로운 기능 추가" },
    { value: "🐛 fix", name: "🐛 fix:      버그 수정" },
    { value: "📝 docs", name: "📝 docs:     문서 변경" },
    {
      value: "💅 style",
      name: "💅 style:    코드의 의미에 영향을 주지 않는 변경 (공백, 포맷팅 등)",
    },
    {
      value: "♻️ refactor",
      name: "♻️ refactor: 버그 수정이나 새로운 기능 추가가 아닌 코드 변경",
    },
    {
      value: "⚡️ perf",
      name: "⚡️ perf:     성능을 개선하는 코드 변경",
    },
    {
      value: "✅ test",
      name: "✅ test:     누락된 테스트 추가 또는 기존 테스트 수정",
    },
    {
      value: "🔧 chore",
      name: "🔧 chore:    빌드 프로세스 또는 보조 도구 및 라이브러리 변경 (문서 생성 등)",
    },
    { value: "🔨 settings", name: "🔨 Settings:  세팅 관련 커밋" },
  ],

  allowCustomScopes: false,
  usePreparedCommit: true,
  skipQuestions: ["scope", "body", "footer"],
  isTicketNumberRequired: false,
  ticketNumberPrefix: "ISSUE-",
  ticketNumberRegExp: "\\d{1,5}",

  messages: {
    type: "커밋 타입을 골라주세요.\n",
    subject: "제목 작성해주세요.\n",
    confirmCommit:
      "마지막으로 한번 확인해주세요. ( 괜찮으면 엔터, 취소는 n, 수정은 e, 도움말 h )",
  },

  // limit subject length
  subjectLimit: 100,
};

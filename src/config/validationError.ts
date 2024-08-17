export const VALIDATION_ERROR_MESSAGES = {
  required: "이 필드는 필수입니다.",
  minLength: (min: number) => `최소 ${min}자 이상 입력해야 합니다.`,
  maxLength: (max: number) => `최대 ${max}자까지 입력할 수 있습니다.`,
  pattern: "유효한 형식이 아닙니다.",
  email: "유효한 이메일 주소를 입력해주세요.",
  url: "유효한 URL을 입력해주세요.",
  number: "숫자만 입력 가능합니다.",
  integer: "정수만 입력 가능합니다.",
  min: (min: number) => `${min} 이상의 값을 입력해주세요.`,
  max: (max: number) => `${max} 이하의 값을 입력해주세요.`,
  match: "입력한 값이 일치하지 않습니다.",
};

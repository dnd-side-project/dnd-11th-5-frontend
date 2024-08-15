export class FiestaError extends Error {
  public statusCode: number;
  public code: string;

  constructor(statusCode: number, code: string, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.name = this.constructor.name;
  }
}

// 서버 에러 클래스
export class ServerError extends FiestaError {
  constructor(code: string, message: string) {
    super(500, code, message);
  }
}

// 클라이언트 에러 클래스
export class ClientError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}
// 페스티벌 에러 클래스
export class FestivalError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}
// 방문일지 에러 클래스
export class LogsError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}

// 유저 에러 클래스
export class UserError extends FiestaError {
  constructor(statusCode: number, code: string, message: string) {
    super(statusCode, code, message);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createFiestaError(error: any) {
  const { code, message, statusCode } = error;
  const initial = error.code.charAt(0);

  if (initial === "S") {
    return new ServerError(code, message);
  }
  if (initial === "C") {
    return new ClientError(statusCode, code, message);
  }
  if (initial === "F") {
    return new FestivalError(statusCode, code, message);
  }
  if (initial === "L") {
    return new ClientError(statusCode, code, message);
  }
  if (initial === "U") {
    return new ClientError(statusCode, code, message);
  }

  return new Error("Something went wrong");
}

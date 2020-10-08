/**
 * 現在の時刻をUTCにおけるISO8601形式の文字列に変換して返す関数
 *
 * @return {String} ISO8601形式の文字列
 */

export const timeCurrentIso = () => { return (new Date()).toISOString() };
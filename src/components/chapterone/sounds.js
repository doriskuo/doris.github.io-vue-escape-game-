const sounds = {
  fail0: new Audio(import.meta.env.BASE_URL + "/sounds/fail0.mp3"),
  fail1: new Audio(import.meta.env.BASE_URL + "/sounds/fail1.mp3"),
  fail2: new Audio(import.meta.env.BASE_URL + "/sounds/fail2.mp3"),
  fail3: new Audio(import.meta.env.BASE_URL + "/sounds/fail3.mp3"),
  fail4: new Audio(import.meta.env.BASE_URL + "/sounds/fail4.mp3"),
  fail5: new Audio(import.meta.env.BASE_URL + "/sounds/fail5.mp3"),
  fail6: new Audio(import.meta.env.BASE_URL + "/sounds/fail6.mp3"),
  fail7: new Audio(import.meta.env.BASE_URL + "/sounds/fail7.mp3"),
  fail8: new Audio(import.meta.env.BASE_URL + "/sounds/fail8.mp3"),
  fail9: new Audio(import.meta.env.BASE_URL + "/sounds/fail9.mp3"),
  bgsound: new Audio(import.meta.env.BASE_URL + "/sounds/background.mp3"),
  escape: new Audio(import.meta.env.BASE_URL + "/sounds/escape.mp3"),
  powerfull: new Audio(import.meta.env.BASE_URL + "/sounds/powerfull.mp3"),
  ghostbreath: new Audio(import.meta.env.BASE_URL + "/sounds/ghostbreath.mp3"),
};

export const playRunSound = () => {
  const audio = new Audio(import.meta.env.BASE_URL + "/sounds/run.mp3"); // 確保路徑正確
  audio.volume = 0.8; // 可以設定音量
  audio.play().catch((err) => {
    console.error("播放失敗", err);
  });
};

export function playSound(name, { loop = false } = {}) {
  const sound = sounds[name];
  if (sound) {
    sound.loop = loop; // 可選：傳參數控制是否循環
    sound.currentTime = 0;
    sound.play();
  }
}
export function stopSound(name) {
  const sound = sounds[name];
  if (sound) {
    sound.pause(); // 停止播放
    sound.currentTime = 0; // 回到開頭（可選）
  }
}

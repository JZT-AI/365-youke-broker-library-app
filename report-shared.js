/* Shared fixture data and availability for the three local prototypes. */
window.ReportPrototype = (() => {
  const prefix = 'youke-assets-disabled:';
  const fixtureNames = {
    '图片 · 11月17日 09:42': 'asset-1',
    '视频 · 11月17日 09:31': 'asset-2',
    '图片 · 11月16日 16:06': 'asset-5',
    '视频 · 11月15日 14:25': 'asset-6'
  };

  const houseExamples = {
    '101140402577': { decoration: '精装修', floorLabel: '中楼层', features: ['满五', '近地铁', '南北通透', '户型方正', '卧室朝南', '明厨'] },
    S4624826410476559: { decoration: '简装修', floorLabel: '高楼层', features: ['双卧朝南', '采光好'] },
    '101139343423': { decoration: '精装修', floorLabel: '低楼层', features: ['明厨明卫', '大客厅'] },
    S8624826410476521: { decoration: '毛坯', floorLabel: '中楼层', features: ['南北通透', '大阳台'] }
  };

  const communityExamples = {
    御锦城: { buildingPeriod: '2009–2019年', listingAverage: 11360, listingMonth: '2026-09' },
    天朗大兴郡: { buildingPeriod: '2010–2016年', listingAverage: 12850, listingMonth: '2026-09' },
    保利心语花园: { buildingPeriod: '2012–2018年', listingAverage: 14270, listingMonth: '2026-09' },
    龙湖香醍国际: { buildingPeriod: '2011–2017年', listingAverage: 13620, listingMonth: '2026-09' }
  };

  function isDisabled(ref) {
    if (!ref) return false;
    try { return localStorage.getItem(prefix + ref) === '1'; }
    catch { return false; }
  }

  function setDisabled(ref, disabled) {
    if (!ref) return false;
    try {
      if (disabled) localStorage.setItem(prefix + ref, '1');
      else localStorage.removeItem(prefix + ref);
      return true;
    } catch { return false; }
  }

  function onAvailabilityChange(handler) {
    window.addEventListener('storage', event => {
      if (event.key?.startsWith(prefix)) handler(event.key.slice(prefix.length));
      else if (event.key === null) handler();
    });
  }

  return {
    isDisabled, setDisabled, onAvailabilityChange, houseExamples, communityExamples,
    referenceForName: name => Object.hasOwn(fixtureNames, name) ? fixtureNames[name] : undefined
  };
})();

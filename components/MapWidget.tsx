const MapWidget = () => {
  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{
        __html: `
          <a class="dg-widget-link" href="http://2gis.kg/bishkek/firm/70000001043043738/center/74.62040662765504,42.863052698108945/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Бишкека</a>
          <div class="dg-widget-link">
            <a href="http://2gis.kg/bishkek/firm/70000001043043738/photos/70000001043043738/center/74.62040662765504,42.863052698108945/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">Фотографии компании</a>
          </div>
          <div class="dg-widget-link">
            <a href="http://2gis.kg/bishkek/center/74.620413,42.862749/zoom/16/routeTab/rsType/bus/to/74.620413,42.862749╎Пионер?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до Пионер</a>
          </div>
          <script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>
          <script charset="utf-8">
            new DGWidgetLoader({
              "max-width":640,"max-height":600,"borderColor":"#a,3a3a3",
              "pos":{"lat":42.863052698108945,"lon":74.62040662765504,"zoom":16},
              "opt":{"city":"bishkek"},
              "org":[{"id":"70000001043043738"}]
            });
          </script>
          <noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>
        `,
      }}
    />
  );
};

export default MapWidget;

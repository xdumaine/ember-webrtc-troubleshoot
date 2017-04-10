"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,a,t,n,r){var i=void 0;a.default.MODEL_FACTORY_INJECTIONS=!0,i=a.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default}),(0,n.default)(i,r.default.modulePrefix),e.default=i}),define("dummy/components/webrtc-troubleshooter/component",["exports","webrtc-troubleshoot/components/webrtc-troubleshooter/component"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,a){e.default=a.default.Controller.extend({iceServers:null,init:function(){this._super.apply(this,arguments);var e=window.localStorage.getItem("iceServers");e&&this.set("iceServers",JSON.parse(e))},actions:{openTroubleshoot:function(){alert("troubleshooting!")}}})}),define("dummy/controllers/array",["exports","ember"],function(e,a){e.default=a.default.Controller}),define("dummy/controllers/object",["exports","ember"],function(e,a){e.default=a.default.Controller}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,a,t,n){function r(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return a.hideSha?i.match(n.versionRegExp)[0]:a.hideVersion?i.match(n.shaRegExp)[0]:i}e.appVersion=r;var i=t.default.APP.version;e.default=a.default.Helper.helper(r)}),define("dummy/helpers/format-date",["exports","ember-intl/helpers/format-date"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/format-html-message",["exports","ember-intl/helpers/format-html-message"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/format-message",["exports","ember-intl/helpers/format-message"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/format-number",["exports","ember-intl/helpers/format-number"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/format-relative",["exports","ember-intl/helpers/format-relative"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/format-time",["exports","ember-intl/helpers/format-time"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/intl-get",["exports","ember-intl/helpers/intl-get"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/l",["exports","ember-intl/helpers/l"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/t-html",["exports","ember-intl/helpers/format-html-message"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/helpers/t",["exports","ember-intl/helpers/t"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,a,t){var n=t.default.APP,r=n.name,i=n.version;e.default={name:"App Version",initialize:(0,a.default)(r,i)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,a){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",a.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,a,t){function n(){var e=arguments[1]||arguments[0];if(!1!==t.default.exportApplicationGlobal){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var r,i=t.default.exportApplicationGlobal;r="string"==typeof i?i:a.default.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/instance-initializers/ember-intl",["exports","ember"],function(e,a){function t(e){n("[ember-intl] instance initializer is deprecated, no longer necessary to call in testing.",!1,{id:"ember-intl-instance-initalizer",until:"3.0.0"})}e.instanceInitializer=t;var n=a.default.deprecate;e.default={name:"ember-intl",initialize:function(){}}}),define("dummy/resolver",["exports","ember-resolver"],function(e,a){e.default=a.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,a,t){var n=a.default.Router.extend({location:t.default.locationType});n.map(function(){}),e.default=n}),define("dummy/routes/application",["exports","ember"],function(e,a){e.default=a.default.Route.extend({intl:a.default.inject.service(),beforeModel:function(){return this.get("intl").setLocale("en-us")}})}),define("dummy/services/intl",["exports","ember-intl/services/intl"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var a=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var n=e.createTextNode("Welcome to Ember");e.appendChild(t,n),e.appendChild(a,t);var t=e.createTextNode("\n\n");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");return e.appendChild(a,t),a},buildRenderNodes:function(e,a,t){var n=new Array(1);return n[0]=e.createMorphAt(a,2,2,t),n},statements:[["inline","webrtc-troubleshooter",[],["iceServers",["subexpr","@mut",[["get","iceServers",["loc",[null,[3,35],[3,45]]],0,0,0,0]],[],[],0,0]],["loc",[null,[3,0],[3,47]]],0,0]],locals:[],templates:[]}}())}),define("dummy/translations/de",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Diese Test können bis zu zwei Minuten dauern.",checkMicrophone:"Mikrofon wird überprüft...",checkMicrophoneSuccess:"Keine Mikrofonprobleme",checkMicrophoneFail:"Hoppla, es gibt ein Mikrofonproblem!",checkVolumeFailure:"Hoppla, wir können Sie nicht hören! Sie haben möglicherweise ein Problem mit Ihrem Mikrofon!",checkCamera:"Kamera wird überprüft...",checkCameraSuccess:"Keine Kameraprobleme",checkCameraFail:"Hoppla, es gibt ein Kameraproblem!",checkCameraAdvanced:"Erweiterte Kameratests werden ausgeführt ...",checkCameraAdvancedSuccess:"Erweiterte Kameratests abgeschlossen",checkCameraAdvancedFail:"Fehler bei den erweiterten Kameratests",checkThroughput:"Netzwerkdurchsatz wird überprüft ...",checkThroughputSuccess:"Durchsatzüberprüfung abgeschlossen",checkThroughputFail:"Fehler bei der Durchsatzüberprüfung",checkBandwidth:"Videobandbreite wird überprüft ...",checkBandwidthSuccess:"Bandbreitenüberprüfung abgeschlossen",checkBandwidthFail:"Fehler bei der Bandbreitenüberprüfung",checkConnectivity:"Verbindung wird überprüft...",checkConnectivitySuccess:"Keine Verbindungsprobleme",checkConnectivityFail:"Hoppla, es gibt ein Verbindungsproblem!",showBandwidthStats:"Bandbreitenstatistik einblenden",hideBandwidthStats:"Bandbreitenstatistik ausblenden",resolution:"Auflösung: {value}",mbpsAvg:"Durchschnittliche Bitrate: {value, number} MBit/s",mbpsMax:"Max. Bitrate: {value, number} MBit/s",mbpsStdDev:"Std.-Abw. der Bitrate: {value, number} MBit/s",packetLoss:"Paketverlust: {value, number} %",rampUpTimeMs:"Anlaufzeit: {value, number} ms",rttAverage:"Durchschnittliche Umlaufzeit: {value, number} ms",rttMax:"Max. Umlaufzeit: {value, number} ms",framerateMean:"Durchschnittliche Bildrate: {value, number}"}}}),define("dummy/translations/en-us",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"These tests may take up to 2 minutes.",checkMicrophone:"Checking microphone ...",checkMicrophoneSuccess:"No microphone issues",checkMicrophoneFail:"Oops, there was a microphone issue!",checkVolumeFailure:"Oops, we can't hear you! You might have a problem with your microphone!",checkCamera:"Checking camera ...",checkCameraSuccess:"No camera issues",checkCameraFail:"Oops, there was a camera issue!",checkCameraAdvanced:"Performing advanced camera tests ...",checkCameraAdvancedSuccess:"Advanced camera tests complete",checkCameraAdvancedFail:"Advanced camera tests failed",checkThroughput:"Checking network throughput ...",checkThroughputSuccess:"Throughput check complete",checkThroughputFail:"Throughput check failed",checkBandwidth:"Checking video bandwidth ...",checkBandwidthSuccess:"Bandwidth check complete",checkBandwidthFail:"Bandwidth check failed",checkConnectivity:"Checking connectivity ...",checkConnectivitySuccess:"No connectivity issues",checkConnectivityFail:"Oops, there was a connectivity issue!",showBandwidthStats:"Show Bandwidth Stats",hideBandwidthStats:"Hide Bandwidth Stats",resolution:"Resolution: {value}",mbpsAvg:"Bit Rate Average: {value, number} Mbps",mbpsMax:"Bit Rate Max: {value, number} Mbps",mbpsStdDev:"Bit Rate Std Dev: {value, number} Mbps",packetLoss:"Packet Loss: {value, number}%",packetsSent:"Packets Sent: {value, number}",jitter:"Jitter: {value, number}ms",rampUpTimeMs:"Ramp-up Time: {value, number}ms",rttAverage:"Round Trip Average: {value, number}ms",rttMax:"Round Trip Max: {value, number}ms",framerateMean:"Frame Rate Average: {value, number}"}}}),define("dummy/translations/es",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Estas pruebas pueden tardar hasta 2 minutos.",checkMicrophone:"Verificando micrófono...",checkMicrophoneSuccess:"No hay problemas con el micrófono",checkMicrophoneFail:"Hay un problema con el micrófono",checkVolumeFailure:"No podemos escucharlo. Es posible que tenga un problema con su micrófono.",checkCamera:"Verificando cámara...",checkCameraSuccess:"No hay problemas con la cámara",checkCameraFail:"Hay un problema con la cámara",checkCameraAdvanced:"Realizando pruebas avanzadas de la cámara...",checkCameraAdvancedSuccess:"Pruebas avanzadas de la cámara completadas",checkCameraAdvancedFail:"Error en las pruebas avanzadas de la cámara",checkThroughput:"Verificando rendimiento de la red...",checkThroughputSuccess:"Verificación de rendimiento completada",checkThroughputFail:"Error en la verificación de rendimiento",checkBandwidth:"Verificando ancho de banda de video...",checkBandwidthSuccess:"Verificación de ancho de banda completada",checkBandwidthFail:"Error en la verificación de ancho de banda",checkConnectivity:"Verificando conectividad...",checkConnectivitySuccess:"No hay problemas de conectividad",checkConnectivityFail:"Hay un problema con la conectividad",showBandwidthStats:"Mostrar estadísticas de banda ancha",hideBandwidthStats:"Ocultar estadísticas de banda ancha",resolution:"Resolución: {value}",mbpsAvg:"Velocidad promedio de bits: {value, number} Mbps",mbpsMax:"Velocidad máxima de bits: {value, number} Mbps",mbpsStdDev:"Desviación estándar de la velocidad de bits: {value, number} Mbps",packetLoss:"Pérdida de paquetes: {value, number}%",rampUpTimeMs:"Tiempo hasta alcanzar resolución: {value, number}ms",rttAverage:"Tiempo promedio de ida y vuelta: {value, number}ms",rttMax:"Tiempo máximo de ida y vuelta: {value, number}ms",framerateMean:"Velocidad promedio de fotogramas: {value, number}"}}}),define("dummy/translations/fr",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Ces tests peuvent prendre 2 minutes au plus.",checkMicrophone:"Vérification du microphone...",checkMicrophoneSuccess:"Aucun problème de microphone",checkMicrophoneFail:"Désolé ! Une erreur s'est produite avec le microphone.",checkVolumeFailure:"Désolé ! Nous ne vous entendons pas. Il se peut que votre microphone ait un problème.",checkCamera:"Vérification de la caméra...",checkCameraSuccess:"Aucun problème avec la caméra",checkCameraFail:"Désolé ! Une erreur s'est produite avec la caméra.",checkCameraAdvanced:"Tests de caméras avancés en cours...",checkCameraAdvancedSuccess:"Tests de caméras avancés terminés",checkCameraAdvancedFail:"Échec des tests de caméras avancés",checkThroughput:"Vérification du débit du réseau...",checkThroughputSuccess:"Vérification du débit terminée...",checkThroughputFail:"Échec de la vérification du débit",checkBandwidth:"Vérification de la bande passante vidéo...",checkBandwidthSuccess:"Vérification de la bande passante vidéo terminée",checkBandwidthFail:"Échec de la vérification de la bande passante vidéo...",checkConnectivity:"Vérification de la connectivité...",checkConnectivitySuccess:"Aucun problème de connectivité",checkConnectivityFail:"Désolé ! Il y a eu un problème de connectivité.",showBandwidthStats:"Afficher les statistiques de bande passante",hideBandwidthStats:"Masquer les statistiques de bande passante",resolution:"Résolution : {value}",mbpsAvg:"Vitesse de transmission moyenne : {value, number} Mbits/s",mbpsMax:"Vitesse de transmission maximale : {value, number} Mbits/s",mbpsStdDev:"Écart-type de la vitesse de transmission : {value, number} Mbits/s",packetLoss:"Perte de paquets : {value, number} %",rampUpTimeMs:"Durée d'accélération : {value, number} ms",rttAverage:"Moyenne de boucle : {value, number} ms",rttMax:"Boucle maximale : {value, number} ms",framerateMean:"Fréquence d'images moyenne : {value, number}"}}}),define("dummy/translations/it",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"La verifica potrebbe richiedere fino a 2 minuti.",checkMicrophone:"Verifica microfono in corso...",checkMicrophoneSuccess:"Il microfono funziona",checkMicrophoneFail:"Il microfono non funziona!",checkVolumeFailure:"Impossibile udire l'utente. Il microfono non funziona.",checkCamera:"Verifica videocamera in corso...",checkCameraSuccess:"La videocamera funziona",checkCameraFail:"La videocamera non funziona!",checkCameraAdvanced:"Esecuzione verifiche avanzate videocamera in corso...",checkCameraAdvancedSuccess:"Verifiche avanzate videocamera completate",checkCameraAdvancedFail:"Verifiche avanzate videocamera non completate",checkThroughput:"Verifica velocità rete in corso...",checkThroughputSuccess:"Verifica velocità completata",checkThroughputFail:"Verifica velocità non completata",checkBandwidth:"Verifica larghezza banda video in corso...",checkBandwidthSuccess:"Verifica larghezza banda completata",checkBandwidthFail:"Verifica larghezza banda non completata",checkConnectivity:"Verifica connettività in corso...",checkConnectivitySuccess:"Nessun problema di connettività",checkConnectivityFail:"Problema di connettività!",showBandwidthStats:"Mostra statistiche larghezza di banda",hideBandwidthStats:"Nascondi statistiche larghezza di banda",resolution:"Risoluzione: {value}",mbpsAvg:"Media velocità bit: {value, number} Mbps",mbpsMax:"Max velocità bit: {value, number} Mbps",mbpsStdDev:"Deviazione standard velocità bit: {value, number} Mbps",packetLoss:"Perdita pacchetto: {value, number}%",rampUpTimeMs:"Tempo incremento: {value, number}ms",rttAverage:"Media round trip: {value, number}ms",rttMax:"Max round trip: {value, number}ms",framerateMean:"Media frequenza fotogrammi: {value, number}"}}}),define("dummy/translations/ja",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"これらのテストには最長 2 分かかる場合があります。",checkMicrophone:"マイクをチェックしています ...",checkMicrophoneSuccess:"マイクに問題はありません",checkMicrophoneFail:"マイクに問題が見つかりました!",checkVolumeFailure:"音声が聞こえません。マイクに問題がある可能性があります。",checkCamera:"カメラをチェックしています ...",checkCameraSuccess:"カメラに問題はありません",checkCameraFail:"カメラに問題が見つかりました!",checkCameraAdvanced:"カメラの高度なテストを実行しています...",checkCameraAdvancedSuccess:"カメラの高度なテストが完了",checkCameraAdvancedFail:"カメラの高度なテストが失敗",checkThroughput:"ネットワークの処理能力をチェックしています...",checkThroughputSuccess:"処理能力チェックの完了",checkThroughputFail:"処理能力チェックの失敗",checkBandwidth:"ビデオの帯域幅をチェックしています...",checkBandwidthSuccess:"処理能力チェックの完了",checkBandwidthFail:"処理能力チェックの失敗",checkConnectivity:"接続をチェックしています ...",checkConnectivitySuccess:"接続に問題はありません",checkConnectivityFail:"接続に問題が見つかりました!",showBandwidthStats:"帯域幅の統計を表示",hideBandwidthStats:"帯域幅の統計を非表示",resolution:"解像度: {value}",mbpsAvg:"ビットレート平均: {value, number} Mbps",mbpsMax:"ビットレート最大: {value, number} Mbps",mbpsStdDev:"ビットレート標準偏差: {value, number} Mbps",packetLoss:"パケットロス: {value, number}%",rampUpTimeMs:"立ち上げ時間: {value, number}ms",rttAverage:"ラウンドトリップ平均: {value, number}ms",rttMax:"ラウンドトリップ最大: {value, number}ms",framerateMean:"フレームレート平均: {value, number}"}}}),define("dummy/translations/ko",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"이러한 테스트는 최대 2분이 걸릴 수 있습니다.",checkMicrophone:"마이크 확인 중...",checkMicrophoneSuccess:"마이크 문제 없음",checkMicrophoneFail:"마이크 문제가 있습니다.",checkVolumeFailure:"소리가 들리지 않습니다. 마이크에 문제가 있을 수도 있습니다.",checkCamera:"카메라 검사 중...",checkCameraSuccess:"카메라 문제 없음",checkCameraFail:"카메라 문제가 있습니다.",checkCameraAdvanced:"고급 카메라 테스트 수행 중...",checkCameraAdvancedSuccess:"고급 카메라 테스트 완료",checkCameraAdvancedFail:"고급 카메라 테스트 실패",checkThroughput:"네트워크 처리량 확인 중...",checkThroughputSuccess:"처리량 확인 완료",checkThroughputFail:"처리량 확인 실패",checkBandwidth:"비디오 대역폭 확인 중...",checkBandwidthSuccess:"대역폭 확인 완료",checkBandwidthFail:"대역폭 확인 실패",checkConnectivity:"연결 검사 중...",checkConnectivitySuccess:"연결 문제 없음",checkConnectivityFail:"연결 문제가 있습니다.",showBandwidthStats:"대역폭 상태 보기",hideBandwidthStats:"대역폭 상태 숨기기",resolution:"해상도: {value}",mbpsAvg:"평균 비트레이트: {value, number} Mbps",mbpsMax:"최대 비트레이트: {value, number} Mbps",mbpsStdDev:"비트레이트 표준 편차: {value, number} Mbps",packetLoss:"패킷 손실: {value, number}%",rampUpTimeMs:"램프업 시간: {value, number}ms",rttAverage:"평균 라운드트립: {value, number}ms",rttMax:"최대 라운드트립: {value, number}ms",framerateMean:"평균 프레임레이트: {value, number}"}}}),define("dummy/translations/nl",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Deze tests kunnen 2 minuten duren.",checkMicrophone:"Microfoon controleren...",checkMicrophoneSuccess:"Geen microfoonproblemen",checkMicrophoneFail:"Er is een probleem met de microfoon.",checkVolumeFailure:"We kunnen u niet horen. Er is mogelijk een probleem met uw microfoon.",checkCamera:"Camera controleren...",checkCameraSuccess:"Geen cameraproblemen",checkCameraFail:"Er is een probleem met de camera.",checkCameraAdvanced:"Uitvoeren van uitgebreide cameratests...",checkCameraAdvancedSuccess:"Uitgebreide cameratests voltooid",checkCameraAdvancedFail:"Uitgebreide cameratests mislukt",checkThroughput:"Controleren van netwerkverbinding...",checkThroughputSuccess:"Netwerkcontrole voltooid",checkThroughputFail:"Netwerkcontrole mislukt",checkBandwidth:"Controleren van videobandbreedte...",checkBandwidthSuccess:"Controle van bandbreedte voltooid",checkBandwidthFail:"Controle van bandbreedte mislukt",checkConnectivity:"Connectiviteit controleren...",checkConnectivitySuccess:"Geen connectiviteitsproblemen",checkConnectivityFail:"Er is een probleem met de connectiviteit.",showBandwidthStats:"Bandbreedtestatistieken weergeven",hideBandwidthStats:"Bandbreedtestatistieken verbergen",resolution:"Resolutie: {value}",mbpsAvg:"Gemiddelde bitsnelheid: {value, number} Mbps",mbpsMax:"Maximale bitsnelheid: {value, number} Mbps",mbpsStdDev:"Standaardafwijking bitsnelheid: {value, number} Mbps",packetLoss:"Pakketverlies: {value, number}%",rampUpTimeMs:"Aanlooptijd: {value, number} ms",rttAverage:"Gemiddelde round-trip tijd: {value, number} ms",rttMax:"Maximale round-trip tijd: {value, number} ms",framerateMean:"Gemiddelde framesnelheid: {value, number}"}}}),define("dummy/translations/no",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Disse testene kan ta opptil 2 minutter.",checkMicrophone:"Sjekker mikrofon ...",checkMicrophoneSuccess:"Ingen mikrofonproblemer",checkMicrophoneFail:"Beklager. Det oppstod et mikrofonproblem.",checkVolumeFailure:"Beklager, vi kan ikke høre deg. Det kan hende du har et problem med mikrofonen.",checkCamera:"Sjekker kamera ...",checkCameraSuccess:"Ingen kameraproblemer",checkCameraFail:"Beklager, det oppstod et kameraproblem.",checkCameraAdvanced:"Utfører avanserte kameratester ...",checkCameraAdvancedSuccess:"Avanserte kameratester er fullført",checkCameraAdvancedFail:"Avanserte kameratester mislyktes",checkThroughput:"Sjekker nettverksgjennomstrømming ...",checkThroughputSuccess:"Gjennomstrømmingssjekk er fullført",checkThroughputFail:"Gjennomstrømmingssjekk mislyktes",checkBandwidth:"Sjekker videobåndbredde ...",checkBandwidthSuccess:"Sjekk av båndbredde er fullført",checkBandwidthFail:"Sjekk av båndbredde mislyktes",checkConnectivity:"Kontrollerer tilkobling ...",checkConnectivitySuccess:"Ingen tilkoblingsproblemer",checkConnectivityFail:"Beklager, det oppstod et tilkoblingsproblem.",showBandwidthStats:"Vis båndbreddestatistikk",hideBandwidthStats:"Skjul båndbreddestatistikk",resolution:"Oppløsning: {value}",mbpsAvg:"Bithastighetstjennomsnitt: {value, number} Mbps",mbpsMax:"Maks bithastighet: {value, number} Mbps",mbpsStdDev:"Std.av. for bithastighet: {value, number} Mbps",packetLoss:"Pakketap: {value, number} %",rampUpTimeMs:"Opprampingstid: {value, number} ms",rttAverage:"Tur-retur-gjennomsnitt: {value, number} ms",rttMax:"Maks for tur-retur: {value, number} ms",framerateMean:"Bildehastighetsgjennomsnitt: {value, number}"}}}),define("dummy/translations/pl",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Wykonanie testów może zająć do 2 minut.",checkMicrophone:"Sprawdzanie mikrofonu...",checkMicrophoneSuccess:"Brak problemów z mikrofonem",checkMicrophoneFail:"Ups! Wystąpił problem z mikrofonem.",checkVolumeFailure:"Nie słyszę Cię! Być może wystąpił problem z mikrofonem.",checkCamera:"Sprawdzanie kamery...",checkCameraSuccess:"Brak problemów z kamerą",checkCameraFail:"Ups! Wystąpił problem z kamerą.",checkCameraAdvanced:"Wykonywanie zaawansowanych testów kamery...",checkCameraAdvancedSuccess:"Zaawansowane testy kamery zakończone",checkCameraAdvancedFail:"Zaawansowane testy kamery nie powiodły się",checkThroughput:"Sprawdzanie przepływności sieci...",checkThroughputSuccess:"Kontrola przepływności zakończona",checkThroughputFail:"Kontrola przepływności zakończona niepowodzeniem",checkBandwidth:"Sprawdzanie przepustowości wideo...",checkBandwidthSuccess:"Kontrola przepustowości zakończona",checkBandwidthFail:"Kontrola przepustowości zakończona niepowodzeniem",checkConnectivity:"Sprawdzanie łączności...",checkConnectivitySuccess:"Brak problemów z łącznością",checkConnectivityFail:"Ups! Wystąpił problem z łącznością.",showBandwidthStats:"Pokaż statystyki przepustowości",hideBandwidthStats:"Ukryj statystyki przepustowości",resolution:"Rozdzielczość: {value}",mbpsAvg:"Średnia szybkość bitowa: {value, number} Mb/s",mbpsMax:"Maks. szybkość bitowa: {value, number} Mb/s",mbpsStdDev:"Odch. stand. szybkości bitowej: {value, number} Mb/s",packetLoss:"Utrata pakietów: {value, number}%",rampUpTimeMs:"Czas narastania: {value, number} ms",rttAverage:"Średni czas w obie strony: {value, number} ms",rttMax:"Maks. czas w obie strony: {value, number} ms",framerateMean:"Średnia liczba klatek: {value, number}"}}}),define("dummy/translations/pt-br",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Estes testes podem demorar até 2 minutos.",checkMicrophone:"Verificando o microfone ...",checkMicrophoneSuccess:"Nenhum problema no microfone",checkMicrophoneFail:"Ops, houve um problema no microfone!",checkVolumeFailure:"Ops, não conseguimos ouvir você! Deve ter algum problema com seu microfone!",checkCamera:"Verificando a câmera ...",checkCameraSuccess:"Nenhum problema na câmera",checkCameraFail:"Ops, houve um problema na câmera!",checkCameraAdvanced:"Realizando testes avançados de câmera...",checkCameraAdvancedSuccess:"Testes avançados de câmera concluídos",checkCameraAdvancedFail:"Testes avançados de câmera falharam",checkThroughput:"Verificando a taxa de transferência de rede...",checkThroughputSuccess:"Verificação de taxa de transferência concluída",checkThroughputFail:"Verificação de taxa de transferência falhou",checkBandwidth:"Verificando a largura de banda de vídeo...",checkBandwidthSuccess:"Verificação de largura de banda de vídeo concluída",checkBandwidthFail:"Verificação de largura de banda de vídeo falhou",checkConnectivity:"Verificando a conectividade ...",checkConnectivitySuccess:"Nenhum problema na conectividade",checkConnectivityFail:"Ops, houve um problema na conectividade!",showBandwidthStats:"Mostrar estatísticas de largura de banda",hideBandwidthStats:"Ocultar estatísticas de largura de banda",resolution:"Resolução: {value}",mbpsAvg:"Taxa de bits média: {value, number} Mbps",mbpsMax:"Taxa de bits máx.: {value, number} Mbps",mbpsStdDev:"Desvio padrão da taxa de bits: {value, number} Mbps",packetLoss:"Perda de pacotes: {value, number}%",rampUpTimeMs:"Tempo para alcançar a resolução: {value, number} ms",rttAverage:"Tempo médio de viagem de ida e volta: {value, number} ms",rttMax:"Tempo máx. de viagem de ida e volta: {value, number} ms",framerateMean:"Taxa de quadros média: {value, number}"}}}),define("dummy/translations/sv",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Det kan ta upp till 2 minuter att köra dessa tester.",checkMicrophone:"Kontrollerar mikrofon ...",checkMicrophoneSuccess:"Inga mikrofonproblem",checkMicrophoneFail:"Ojdå, det har uppstått ett mikrofonproblem!",checkVolumeFailure:"Hallå, vi kan inte höra dig! Du kanske har problem med mikrofonen!",checkCamera:"Kontrollerar kamera ...",checkCameraSuccess:"Inga problem med kameran",checkCameraFail:"Ojdå, det har uppstått ett problem med kameran!",checkCameraAdvanced:"Utför avancerade kameratester ...",checkCameraAdvancedSuccess:"Avancerade kameratester slutförda",checkCameraAdvancedFail:"Avancerade kameratester misslyckades",checkThroughput:"Kontrollerar nätverkets dataflöde ...",checkThroughputSuccess:"Dataflödeskontroll klar",checkThroughputFail:"Dataflödeskontroll misslyckades",checkBandwidth:"Kontrollerar videobandbredd ...",checkBandwidthSuccess:"Bandbreddskontroll klar",checkBandwidthFail:"Bandbreddskontroll misslyckades",checkConnectivity:"Kontrollerar anslutningen...",checkConnectivitySuccess:"Inga anslutningsproblem",checkConnectivityFail:"Ojdå, det har uppstått ett anslutningsproblem!",showBandwidthStats:"Visa bandbreddsstatistik",hideBandwidthStats:"Dölj banbreddsstatistik",resolution:"Upplösning: {value}",mbpsAvg:"Genomsnittlig bithastighet: {value, number} Mbit/s",mbpsMax:"Maximal bithastighet: {value, number} Mbit/s",mbpsStdDev:"Standardavvikelse för bithastighet: {value, number} Mbit/s",packetLoss:"Paketförlust: {value, number} %",rampUpTimeMs:"Uppstartstid: {value, number} ms",rttAverage:"Genomsnittlig tur och retur: {value, number} ms",rttMax:"Maximal tur och retur: {value, number} ms",framerateMean:"Genomsnittlig bildfrekvens: {value, number}"}}}),define("dummy/translations/th",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"การทดสอบเหล่านี้อาจใช้เวลาสูงสุด 2 นาที",checkMicrophone:"กำลังตรวจสอบไมโครโฟน ..",checkMicrophoneSuccess:"ไม่พบปัญหาเกี่ยวกับไมโครโฟน",checkMicrophoneFail:"ขออภัย พบปัญหาเกี่ยวกับไมโครโฟน!",checkVolumeFailure:"ขออภัย เราไม่ได้ยินเสียงคุณ! ไมโครโฟนของคุณอาจมีปัญหา!",checkCamera:"กำลังตรวจสอบกล้อง ...",checkCameraSuccess:"ไม่พบปัญหาเกี่ยวกับกล้อง",checkCameraFail:"ขออภัย พบปัญหาเกี่ยวกับกล้อง!",checkCameraAdvanced:"กำลังดำเนินการทดสอบกล้องขั้นสูง ...",checkCameraAdvancedSuccess:"การทดสอบกล้องขั้นสูงเสร็จสมบูรณ์",checkCameraAdvancedFail:"การทดสอบกล้องขั้นสูงล้มเหลว",checkThroughput:"กำลังตรวจสอบปริมาณงานเครือข่าย ...",checkThroughputSuccess:"การตรวจสอบปริมาณงานเสร็จสิ้น",checkThroughputFail:"การตรวจสอบปริมาณงานล้มเหลว",checkBandwidth:"กำลังตรวจสอบแบนด์วิธวิดีโอ ...",checkBandwidthSuccess:"การตรวจสอบแบนด์วิธเสร็จสิ้น",checkBandwidthFail:"การตรวจสอบแบนด์วิธล้มเหลว",checkConnectivity:"กำลังตรวจสอบการเชื่อมต่อ ...",checkConnectivitySuccess:"ไม่พบปัญหาเกี่ยวกับการเชื่อมต่อ",checkConnectivityFail:"ขออภัย พบปัญหาเกี่ยวกับการเชื่อมต่อ!",showBandwidthStats:"แสดงสถานะแบนด์วิธ",hideBandwidthStats:"ซ่อนสถานะแบนด์วิธ",resolution:"ความละเอียด: {value}",mbpsAvg:"อัตราบิตโดยเฉลี่ย: {value, number} เมกะบิตต่อวินาที",mbpsMax:"อัตราบิตสูงสุด: {value, number} เมกะบิตต่อวินาที",mbpsStdDev:"ค่าเบี่ยงเบนมาตรฐานของอัตราบิต: {value, number} เมกะบิตต่อวินาที",packetLoss:"แพคเก็ตสูญหาย: {value, number}%",rampUpTimeMs:"เวลาหน่วง: {value, number} มิลลิวินาที",rttAverage:"เวลาเดินทางไปกลับโดยเฉลี่ย: {value, number} มิลลิวินาที",rttMax:"เวลาเดินทางไปกลับสูงสุด: {value, number} มิลลิวินาที",framerateMean:"อัตราเฟรมโดยเฉลี่ย: {value, number}"}}}),define("dummy/translations/tr",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"Bu testler 2 dakika sürebilir.",checkMicrophone:"Mikrofon denetleniyor...",checkMicrophoneSuccess:"Mikrofonla ilgili bir sorun yok",checkMicrophoneFail:"Ne yazık ki mikrofonla ilgili bir sorun var!",checkVolumeFailure:"Ne yazık ki sizi duyamıyoruz! Mikrofonunuzla ilgili bir sorun olabilir!",checkCamera:"Kamera denetleniyor...",checkCameraSuccess:"Kamerayla ilgili sorun yok",checkCameraFail:"Ne yazık ki kamerayla ilgili bir sorun var!",checkCameraAdvanced:"Gelişmiş kamera testleri gerçekleştiriliyor...",checkCameraAdvancedSuccess:"Gelişmiş kamera testleri tamamlandı",checkCameraAdvancedFail:"Gelişmiş kamera testleri başarısız oldu",checkThroughput:"Ağ performansı denetleniyor...",checkThroughputSuccess:"Performans denetimi tamamlandı",checkThroughputFail:"Performans denetimi başarısız oldu",checkBandwidth:"Video bant genişliği denetleniyor...",checkBandwidthSuccess:"Bant genişliği denetimi tamamlandı",checkBandwidthFail:"Bant genişliği denetimi başarısız oldu",checkConnectivity:"Bağlantı denetleniyor...",checkConnectivitySuccess:"Bağlantı sorunu yok",checkConnectivityFail:"Ne yazık ki bağlantıyla ilgili bir sorun var!",showBandwidthStats:"Bant Genişliği Durumunu Göster",hideBandwidthStats:"Bant Genişliği Durumunu Gizle",resolution:"Çözünürlük: {value}",mbpsAvg:"Bit Hızı ORtalaması: {value, number} Mbps",mbpsMax:"Bit Hızı Maks: {value, number} Mbps",mbpsStdDev:"Bit Rate Std Spm: {value, number} Mbps",packetLoss:"Paket Kaybı: %{value, number}",rampUpTimeMs:"Veri Çıkışı Süresi: {value, number} ms",rttAverage:"Gidiş-Geliş Ortalaması: {value, number} ms",rttMax:"Gidiş Geliş Maks: {value, number} ms",framerateMean:"Kare Hızı Ortalaması: {value, number}"}}}),define("dummy/translations/zh-cn",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"这些测试可能需要 2 分钟。",checkMicrophone:"正在检查麦克风...",checkMicrophoneSuccess:"麦克风正常",checkMicrophoneFail:"哎呀，麦克风出问题了！",checkVolumeFailure:"哎呀，我们听不到您讲话！您的麦克风可能出现问题！",checkCamera:"正在检查摄像头...",checkCameraSuccess:"摄像头正常",checkCameraFail:"哎呀，摄像头出问题了！",checkCameraAdvanced:"执行高级摄像头测试...",checkCameraAdvancedSuccess:"高级摄像头测试完成",checkCameraAdvancedFail:"高级摄像头测试失败",checkThroughput:"正在检查网络吞吐量...",checkThroughputSuccess:"吞吐量检查完成",checkThroughputFail:"吞吐量检查失败",checkBandwidth:"正在检查视频带宽...",checkBandwidthSuccess:"带宽检查完成",checkBandwidthFail:"带宽检查失败",checkConnectivity:"正在检查连接...",checkConnectivitySuccess:"连接正常",checkConnectivityFail:"哎呀，连接出问题了！",showBandwidthStats:"显示带宽状态",hideBandwidthStats:"隐藏带宽状态",resolution:"分辨率: {value}",mbpsAvg:"比特速率平均值: {value, number} Mbps",mbpsMax:"比特速率最大值: {value, number} Mbps",mbpsStdDev:"比特速率偏差: {value, number} Mbps",packetLoss:"丢包: {value, number}%",
rampUpTimeMs:"加速时间: {value, number}ms",rttAverage:"往返平均值: {value, number}ms",rttMax:"往返最大值: {value, number}ms",framerateMean:"帧速率平均值: {value, number}"}}}),define("dummy/translations/zh-tw",["exports"],function(e){e.default={webrtcTroubleshoot:{troubleshootTimeWarning:"這些測試可能需要 2 分鐘。",checkMicrophone:"正在檢查麥克風...",checkMicrophoneSuccess:"麥克風正常",checkMicrophoneFail:"哎呀，麥克風出問題了！",checkVolumeFailure:"哎呀，我們聽不到您講話！您的麥克風可能出現問題！",checkCamera:"正在檢查攝影機...",checkCameraSuccess:"攝影機正常",checkCameraFail:"哎呀，攝影機出問題了！",checkCameraAdvanced:"執行進階攝影機測試...",checkCameraAdvancedSuccess:"進階攝影機測試完成",checkCameraAdvancedFail:"進階攝影機測試失敗",checkThroughput:"正在檢查網路輸送量...",checkThroughputSuccess:"輸送量檢查完成",checkThroughputFail:"輸送量檢查失敗",checkBandwidth:"正在檢查視訊頻寬...",checkBandwidthSuccess:"頻寬檢查完成",checkBandwidthFail:"頻寬檢查失敗",checkConnectivity:"正在檢查連接...",checkConnectivitySuccess:"連接正常",checkConnectivityFail:"哎呀，連接出問題了！",showBandwidthStats:"顯示頻寬統計資料",hideBandwidthStats:"隱藏頻寬統計資料",resolution:"解析度：{value}",mbpsAvg:"平均位元速率：{value, number} Mbps",mbpsMax:"最大位元速率：{value, number} Mbps",mbpsStdDev:"位元速率標準偏差：{value, number} Mbps",packetLoss:"封包遺失：{value, number}%",rampUpTimeMs:"加速時間：{value, number}ms",rttAverage:"平均來回時間：{value, number}ms",rttMax:"最大來回時間：{value, number}ms",framerateMean:"平均畫格速率：{value, number}"}}}),define("dummy/utils/intl/missing-message",["exports","ember","ember-intl/utils/links"],function(e,a,t){function n(e,a){return a?r("[ember-intl] translation: '"+e+"' on locale: '"+a.join(", ")+"' was not found.",!1,{id:"ember-intl-missing-translation"}):r("[ember-intl] no locale has been set. Documentation: "+t.default.unsetLocale,!1,{id:"ember-intl-no-locale-set"}),"Missing translation: "+e}e.default=n;var r=a.default.warn}),define("dummy/utils/video-frame-checker",["exports","ember-webrtc-troubleshoot/utils/video-frame-checker"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}})}),define("dummy/config/environment",["ember"],function(e){try{var a=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),t=JSON.parse(unescape(a)),n={default:t};return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({name:"ember-webrtc-troubleshoot",version:"4.2.0"});
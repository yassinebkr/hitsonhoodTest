jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_4" ],
                    "attributes": {
                      "opacity": "0.59"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(379.60550146566266% 379.60550146566266% at -15.51016415887028% -93.86904198606092%, #270945E2 0.0%, #7824D0 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_8 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://music.apple.com/fr/album/superstar-single/1621408474"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_2" ],
                    "attributes": {
                      "opacity": "0.46"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(229.51123343626557% 229.51123343626557% at 19.007711051947876% -63.45778506507198%, #713CEF 0.0%, #7824D0 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://deezer.page.link/vKHpZLCdS9PvxtS59"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#313030"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(379.60550146566266% 379.60550146566266% at -15.51016415887028% -93.86904198606092%, #2F2F2F 0.0%, #7824D0 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://open.spotify.com/track/6v4tdZjVJyZeHCyorY27g4?si=7e5a36699b764d2f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3" ],
                    "attributes": {
                      "opacity": "0.72"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(169.13664457642375% 169.13664457642375% at 52.84623061767826% 46.42396665984015%, #4D4958 0.0%, #2311C1 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://music.apple.com/fr/album/superstar-single/1621408474"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3" ],
                    "attributes": {
                      "opacity": "0.72"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(169.13664457642375% 169.13664457642375% at 52.84623061767826% 46.42396665984015%, #4D4958 0.0%, #2311C1 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://deezer.page.link/vKHpZLCdS9PvxtS59"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3" ],
                    "attributes": {
                      "opacity": "0.72"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(169.13664457642375% 169.13664457642375% at 52.84623061767826% 46.42396665984015%, #4D4958 0.0%, #2311C1 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://open.spotify.com/track/6v4tdZjVJyZeHCyorY27g4?si=7e5a36699b764d2f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_2" ],
                    "attributes": {
                      "opacity": "0.46"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://deezer.page.link/vKHpZLCdS9PvxtS59"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3" ],
                    "attributes": {
                      "opacity": "0.72"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(169.13664457642375% 169.13664457642375% at 52.84623061767826% 46.42396665984015%, #4D4958 0.0%, #2311C1 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://open.spotify.com/track/6v4tdZjVJyZeHCyorY27g4?si=7e5a36699b764d2f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3" ],
                    "attributes": {
                      "opacity": "0.72"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "radial-gradient(169.13664457642375% 169.13664457642375% at 52.84623061767826% 46.42396665984015%, #4D4958 0.0%, #2311C1 100.0%)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://music.apple.com/fr/album/superstar-single/1621408474"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });
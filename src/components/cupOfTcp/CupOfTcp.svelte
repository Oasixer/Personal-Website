<script>
  

    /* { */
      /* 'id': '', */
      /* 'name': '', */
      /* 'bytes': *8, */
      /* 'desc': '', */
      /* 'examples': [ */
        /* [ */
          /* '', // VAL =  */
          /* '' // COLOUR =  */
        /* ], */
      /* ], // end of examples */
      /* 'outlineColour': 'red', */
      /* 'defaultTextColour': 'red', */
      /* 'underline':'none' // for MAC */
    /* }, */

ethernet_header = [
  {
    'id': 'preamble',
    'parent_id': 'ethernet',
    'displayName': 'preamble',
    'bytes': 8,
    'variable': 'false',
    'desc': '',
    'examples': ['AA AA AA AA AA AA AA 55'],
  },
  {
    'id': 'target_mac',
    'parent_id': 'ethernet',
    'name': 'Target MAC',
    'bytes': 6,
    'desc': '',
    'examples': [
      [
        '68:5b:35:8e:2c:2d' // VALUE: corresponds to hostA in Eater ex)
      ]
    ] // end of examples
    /* 'underline':'darkgreen' // for MAC */
  },
  {
    'id': 'src_mac',
    'parent_id': 'ethernet',
    'name': 'Source MAC',
    'bytes': 6,
    'type': 'binary -> why do we display as hex (ascii???)',
    'desc': '',
    'examples': [
      [
        '68:5b:35:8e:2c:2d', // VALUE: corresponds to hostA in Eater ex)
        'purple' // COLOUR: = host A's colour
      ],
      [
        '08:00:27:01:ae:95', // VALUE: corresponds to hostB in Eater ex)
        'blue' // COLOUR: = host A's colour
      ]
    ], // end of examples
  },
  {
    'id': 'ether_type',
    'parent_id': 'ethernet',
    'name': 'Ether type / size',
    'bytes': 2,
    'type': 'binary -> why do we display as hex (ascii???)',
    'desc': '',
    'determinesPayloadType': true, // !!!!
    'payloadTypes': [
      [
        'arp', // id of payload type
        '0806', // corresponding value
        'maroon', // colour
        'for ARP' // explanation
      ]
    ],
    'outlineColour': 'red',
    'defaultTextColour':'red',
    'underline':'none'
  },
    //{ // VLAN tag may be inserted if you are in a VLAN (common for corporate type networks where
      // the network engineering is much easier if you just put everyone on a flat network and use
      // VLANs to achieve the topology you want (apparently this has the same security advantages? I feel like a malicious actor could just sniff VLAN tags and find the network they want though no? idk.
    /* 'id': 'vlan_tag', */
    /* 'name': 'VLAN tag - identifying subnet?', */
    /* 'bytes': 2, */
    /* 'type': 'asdifjai', */
    /* 'desc': '', */
    /* 'examples': ['todo'], */
    /* 'optional': true, // unique option */
    /* 'outlineColour': 'todo', */
    /* 'defaultTextColour':'todo', */
    /* 'underline':'none' // for MAC */
  /* }, */
  {
    'id': 'ethernet_payload',
    // this should hopefully maybe 
    payload_types: [
      {
        'id': 'arp',
        'name': 'ARP',
        'header': {
          'hw_addr_type': {
            'id': 'hw_addr_type',
            'name': 'HW Address Type',
            'bytes': 2,
            'desc': '1 indicates eth / indicates HW Addr type is a MAC',
            /* 'examples': ['1': <<<HW Address field is a MAC addr>>> ], */
            // TODO need some way to codify this relation to the other field, same w/ the len field next
            'examples': [],
          },
          'protocol_addr_type': {
            'id': 'protocol_addr_type',
            'name': 'Protocol Addr Type',
            'bytes': 2,
            'desc': 'Protocol (IPv4 etc) addr type',
            'examples': [
              [
                '0800', // VAL for IPv4
                'ipv4_colour_idk' // COLOUR = 
              ],
            ], // end of examples
          },
          // ------------------------------------------
          'hw_addr_len': {
            'id': 'hw_addr_len',
            'name': 'HW Address Length (bytes)',
            // 6 bytes for MAC Address.
            'bytes': 1,
            'desc': '',
            // TODO need some way to codify the relation to the hw_addr field? 
            'examples': [
              [
                6, // VALUE = 6 bytes for MAC addr
                'darkgreen'
              ]
            ]
          },
          'protocol_addr_len': {
            'id': 'protocol_addr_len',
            'name': 'Protocol Address Length (bytes)',
            // 6 bytes for MAC Address.
            'bytes': 1,
            'desc': 'Length of the protocol (ie. IPv4) address length.',
            // TODO need some way to codify the relation to the hw_addr field? 
            'examples': [
              [
                '6', // VALUE = 6 bytes for MAC addr
                'darkgreen'
              ]
            ],
          },
          'op_code': {
            'id': 'op_code',
            'name': 'Operation code (reply/req)',
            // 6 bytes for MAC Address.
            'bytes': 2, // TODO need to codify how this value is used?
            'desc': '1 => ARP Req, 2 => ARP Reply',
            'examples': [['01','maroon', 'ARP Req'], ['02', 'maroon', 'ARP Reply']],
          },
          'src_hw_addr': {
            'id': 'src_hw_addr',
            'name': 'Source HW Addr',
            'bytes': 6,
            'desc': 'Source MAC Addr',
            'examples': [
              [
                '68:5b:35:8e:2c:2d', // VALUE: corresponds to hostA in Eater ex)
                'purple' // COLOUR: = hostB colour
              ]
            ] // end of examples
          },
          'src_protocol_addr': {
            'id': 'src_protocol_addr',
            'name': 'Source Protocol (eg. IPv4) Addr',
            'bytes': 4,
            'desc': 'Source Protocol (eg. IPv4) Address',
            'examples': [
              [
                '192.168.9.2', // VAL = 
                'lightblue' // COLOUR = 
              ],
            ] // end of examples
          },
          'target_hw_addr': {
            'id': 'target_hw_addr',
            'name': 'Target HW Addr',
            'bytes': 6,
            'desc': 'Target MAC Addr',
            'examples': [
              [
                '08:00:27:01:ae:95', // VALUE: corresponds to hostB in Eater ex)
                'blue' // COLOUR: = hostB colour
              ]
            ] // end of examples
          },
          'target_protocol_addr': {
            'id': 'target_protocol_addr',
            'name': 'Target Protocol (eg. IPv4) Addr',
            'bytes': 4,
            'desc': 'Target Protocol (eg. IPv4) Address',
            'examples': [
              [
                '192.168.9.2', // VAL = 
                'lightblue' // COLOUR = 
              ],
            ] // end of examples
          }
        } // end of ARP header
      } // end of ARP
    ]
  }
]
</script>

<img src='./images/network/router.svg' style="width: 800px; height: 800px;"/>

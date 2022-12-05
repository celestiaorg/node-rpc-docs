export const spec = {
    "openrpc": "1.2.6",
    "info": {
        "title": "Celestia Node API",
        "description": "The Celestia Node API is the collection of RPC methods that can be used to interact with the services provided by Celestia Data Availability Nodes.",
        "version": "v0.0.1"
    },
    "externalDocs": {
        "description": "Celestia Node GitHub",
        "url": "https://github.com/celestiaorg/celestia-node"
    },
    "methods": [
        {
            "name": "daser.SamplingStats",
            "description": "",
            "summary": "SamplingStats returns the current statistics over the DA sampling process.\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "SamplingStats",
                "description": "SamplingStats",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "head_of_sampled_chain": 27499,
                            "head_of_catchup": 29101,
                            "network_head_height": 30483,
                            "workers": [
                                {
                                    "current": 28806,
                                    "from": 28802,
                                    "to": 28901
                                },
                                {
                                    "current": 28906,
                                    "from": 28902,
                                    "to": 29001
                                },
                                {
                                    "current": 27794,
                                    "from": 27702,
                                    "to": 27801
                                },
                                {
                                    "current": 28191,
                                    "from": 28102,
                                    "to": 28201
                                },
                                {
                                    "current": 28420,
                                    "from": 28402,
                                    "to": 28501
                                },
                                {
                                    "current": 28334,
                                    "from": 28302,
                                    "to": 28401
                                },
                                {
                                    "current": 27691,
                                    "from": 27602,
                                    "to": 27701
                                },
                                {
                                    "current": 27889,
                                    "from": 27802,
                                    "to": 27901
                                },
                                {
                                    "current": 27990,
                                    "from": 27902,
                                    "to": 28001
                                },
                                {
                                    "current": 28293,
                                    "from": 28202,
                                    "to": 28301
                                },
                                {
                                    "current": 28092,
                                    "from": 28002,
                                    "to": 28101
                                },
                                {
                                    "current": 29004,
                                    "from": 29002,
                                    "to": 29101
                                },
                                {
                                    "current": 28708,
                                    "from": 28702,
                                    "to": 28801
                                },
                                {
                                    "current": 28513,
                                    "from": 28502,
                                    "to": 28601
                                },
                                {
                                    "current": 27500,
                                    "from": 27402,
                                    "to": 27501
                                },
                                {
                                    "current": 28615,
                                    "from": 28602,
                                    "to": 28701
                                }
                            ],
                            "concurrency": 16,
                            "catch_up_done": false,
                            "is_running": true
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "catch_up_done": {
                            "type": "boolean"
                        },
                        "concurrency": {
                            "title": "number",
                            "type": "number"
                        },
                        "failed": {
                            "patternProperties": {
                                ".*": {
                                    "description": "Number is a number",
                                    "title": "number",
                                    "type": "number"
                                }
                            },
                            "type": "object"
                        },
                        "head_of_catchup": {
                            "title": "number",
                            "type": "number"
                        },
                        "head_of_sampled_chain": {
                            "title": "number",
                            "type": "number"
                        },
                        "is_running": {
                            "type": "boolean"
                        },
                        "network_head_height": {
                            "title": "number",
                            "type": "number"
                        },
                        "workers": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "current": {
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "from": {
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "to": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/das/daser.go#L169"
            }
        },
        {
            "name": "daser.WaitCatchUp",
            "description": "",
            "summary": "WaitCatchUp blocks until DASer finishes catching up to the network head.\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "Null",
                "description": "Null",
                "schema": {
                    "type": [
                        "null"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/das/daser.go#L174"
            }
        },
        {
            "name": "fraud.Get",
            "description": "",
            "summary": "Get fetches fraud proofs from the disk by its type.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "proofType",
                    "description": "ProofType",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "badencoding"
                        ],
                        "type": [
                            "string"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "[]Proof",
                "description": "[]Proof",
                "summary": "",
                "schema": {
                    "examples": [
                        [
                            {
                                "BlockHeight": 42,
                                "Shares": [],
                                "Index": 0,
                                "Axis": 0
                            }
                        ]
                    ],
                    "items": [
                        {
                            "additionalProperties": true
                        }
                    ],
                    "type": [
                        "array"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/fraud/service.go#L202"
            }
        },
        {
            "name": "fraud.Subscribe",
            "description": "",
            "summary": "Subscribe allows to subscribe on a Proof pub sub topic by its type.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "proofType",
                    "description": "ProofType",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "badencoding"
                        ],
                        "type": [
                            "string"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "_",
                "description": "Subscription",
                "summary": "",
                "schema": {
                    "examples": [
                        {}
                    ],
                    "additionalProperties": true
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/fraud/service.go#L102"
            }
        },
        {
            "name": "header.GetByHeight",
            "description": "",
            "summary": "GetByHeight returns the ExtendedHeader at the given height, blocking\nuntil header has been processed by the store or context deadline is exceeded.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "height",
                    "description": "uint64",
                    "summary": "",
                    "schema": {
                        "title": "number",
                        "description": "Number is a number",
                        "examples": [
                            42
                        ],
                        "type": [
                            "number"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*header.ExtendedHeader",
                "description": "*header.ExtendedHeader",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "validator_set": {
                                "validators": [
                                    {
                                        "address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA",
                                        "pub_key": {
                                            "type": "tendermint/PubKeyEd25519",
                                            "value": "aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o="
                                        },
                                        "voting_power": "5000000000",
                                        "proposer_priority": "0"
                                    }
                                ],
                                "proposer": {
                                    "address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA",
                                    "pub_key": {
                                        "type": "tendermint/PubKeyEd25519",
                                        "value": "aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o="
                                    },
                                    "voting_power": "5000000000",
                                    "proposer_priority": "0"
                                }
                            },
                            "header": {
                                "version": {
                                    "block": 11
                                },
                                "chain_id": "arabica-2",
                                "height": 42,
                                "time": "2022-11-15T17:04:04.364455555Z",
                                "last_block_id": {
                                    "hash": "D35285797CB08451E8E85B97B0259A3C98E42BFCAEA5465152EE68DBD5760935",
                                    "parts": {
                                        "total": 1,
                                        "hash": "EF5E90A836E5676B98177FB38B0C0BB7D957F71BBA6109B1D79C65344BC6C7FB"
                                    }
                                },
                                "last_commit_hash": "DB5BB6A1518FD618D5B6607E9507E60E52BB9B532E5718D6D74F1F510FE5D10F",
                                "data_hash": "6F52DAC16545E45725BE6EA32AED55266E45034800EEE1D87C9428F4844EA47A",
                                "validators_hash": "883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D",
                                "next_validators_hash": "883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D",
                                "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
                                "app_hash": "9E52BD09B71043C25FBC7C8D928490E051811A10E978C66E3519A41352DD0699",
                                "last_results_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
                                "evidence_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
                                "proposer_address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA"
                            },
                            "commit": {
                                "height": 42,
                                "round": 0,
                                "block_id": {
                                    "hash": "F22BAEF4D99A835D9F2CA92C58E8AA48C589284B7916FF073A1D778C73EA4CC1",
                                    "parts": {
                                        "total": 1,
                                        "hash": "9961CC7B6B9BE558D0FED40675232F4B37BEE75419C815240804C1A1801CF626"
                                    }
                                },
                                "signatures": [
                                    {
                                        "block_id_flag": 2,
                                        "validator_address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA",
                                        "timestamp": "2022-11-15T17:04:29.384867372Z",
                                        "signature": "0+INXvvzUExQToNpmQhhvFySbQYFqoYTpgFACP+3lkSWGh48ukkMMqj2UnnAzqQhabuKeXx/5f8hiwEzeMM6Dg=="
                                    }
                                ]
                            },
                            "dah": {
                                "row_roots": [
                                    "//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7",
                                    "/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4"
                                ],
                                "column_roots": [
                                    "//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7",
                                    "/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4"
                                ]
                            }
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "commit": {
                            "additionalProperties": false,
                            "properties": {
                                "block_id": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "hash": {
                                            "items": {
                                                "description": "Number is a number",
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "type": "array"
                                        },
                                        "parts": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "hash": {
                                                    "items": {
                                                        "description": "Number is a number",
                                                        "title": "number",
                                                        "type": "number"
                                                    },
                                                    "type": "array"
                                                },
                                                "total": {
                                                    "title": "number",
                                                    "type": "number"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                },
                                "height": {
                                    "title": "number",
                                    "type": "number"
                                },
                                "round": {
                                    "title": "number",
                                    "type": "number"
                                },
                                "signatures": {
                                    "items": {
                                        "additionalProperties": false,
                                        "properties": {
                                            "block_id_flag": {
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "signature": {
                                                "media": {
                                                    "binaryEncoding": "base64"
                                                },
                                                "type": "string"
                                            },
                                            "timestamp": {
                                                "format": "date-time",
                                                "type": "string"
                                            },
                                            "validator_address": {
                                                "items": {
                                                    "description": "Number is a number",
                                                    "title": "number",
                                                    "type": "number"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    },
                                    "type": "array"
                                }
                            },
                            "type": "object"
                        },
                        "dah": {
                            "additionalProperties": false,
                            "properties": {
                                "column_roots": {
                                    "items": {
                                        "media": {
                                            "binaryEncoding": "base64"
                                        },
                                        "type": "string"
                                    },
                                    "type": "array"
                                },
                                "row_roots": {
                                    "items": {
                                        "media": {
                                            "binaryEncoding": "base64"
                                        },
                                        "type": "string"
                                    },
                                    "type": "array"
                                }
                            },
                            "type": "object"
                        },
                        "header": {
                            "additionalProperties": false,
                            "properties": {
                                "app_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "chain_id": {
                                    "type": "string"
                                },
                                "consensus_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "data_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "evidence_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "height": {
                                    "title": "number",
                                    "type": "number"
                                },
                                "last_block_id": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "hash": {
                                            "items": {
                                                "description": "Number is a number",
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "type": "array"
                                        },
                                        "parts": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "hash": {
                                                    "items": {
                                                        "description": "Number is a number",
                                                        "title": "number",
                                                        "type": "number"
                                                    },
                                                    "type": "array"
                                                },
                                                "total": {
                                                    "title": "number",
                                                    "type": "number"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                },
                                "last_commit_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "last_results_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "next_validators_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "proposer_address": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "time": {
                                    "format": "date-time",
                                    "type": "string"
                                },
                                "validators_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "version": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "app": {
                                            "title": "number",
                                            "type": "number"
                                        },
                                        "block": {
                                            "title": "number",
                                            "type": "number"
                                        }
                                    },
                                    "type": "object"
                                }
                            },
                            "type": "object"
                        },
                        "validator_set": {
                            "additionalProperties": false,
                            "properties": {
                                "proposer": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "address": {
                                            "items": {
                                                "description": "Number is a number",
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "type": "array"
                                        },
                                        "proposer_priority": {
                                            "title": "number",
                                            "type": "number"
                                        },
                                        "pub_key": {
                                            "additionalProperties": true
                                        },
                                        "voting_power": {
                                            "title": "number",
                                            "type": "number"
                                        }
                                    },
                                    "type": "object"
                                },
                                "validators": {
                                    "items": {
                                        "additionalProperties": false,
                                        "properties": {
                                            "address": {
                                                "items": {
                                                    "description": "Number is a number",
                                                    "title": "number",
                                                    "type": "number"
                                                },
                                                "type": "array"
                                            },
                                            "proposer_priority": {
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "pub_key": {
                                                "additionalProperties": true
                                            },
                                            "voting_power": {
                                                "title": "number",
                                                "type": "number"
                                            }
                                        },
                                        "type": "object"
                                    },
                                    "type": "array"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/header/service.go#L39"
            }
        },
        {
            "name": "header.Head",
            "description": "",
            "summary": "Head returns the ExtendedHeader of the chain head.\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "*header.ExtendedHeader",
                "description": "*header.ExtendedHeader",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "validator_set": {
                                "validators": [
                                    {
                                        "address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA",
                                        "pub_key": {
                                            "type": "tendermint/PubKeyEd25519",
                                            "value": "aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o="
                                        },
                                        "voting_power": "5000000000",
                                        "proposer_priority": "0"
                                    }
                                ],
                                "proposer": {
                                    "address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA",
                                    "pub_key": {
                                        "type": "tendermint/PubKeyEd25519",
                                        "value": "aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o="
                                    },
                                    "voting_power": "5000000000",
                                    "proposer_priority": "0"
                                }
                            },
                            "header": {
                                "version": {
                                    "block": 11
                                },
                                "chain_id": "arabica-2",
                                "height": 42,
                                "time": "2022-11-15T17:04:04.364455555Z",
                                "last_block_id": {
                                    "hash": "D35285797CB08451E8E85B97B0259A3C98E42BFCAEA5465152EE68DBD5760935",
                                    "parts": {
                                        "total": 1,
                                        "hash": "EF5E90A836E5676B98177FB38B0C0BB7D957F71BBA6109B1D79C65344BC6C7FB"
                                    }
                                },
                                "last_commit_hash": "DB5BB6A1518FD618D5B6607E9507E60E52BB9B532E5718D6D74F1F510FE5D10F",
                                "data_hash": "6F52DAC16545E45725BE6EA32AED55266E45034800EEE1D87C9428F4844EA47A",
                                "validators_hash": "883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D",
                                "next_validators_hash": "883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D",
                                "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
                                "app_hash": "9E52BD09B71043C25FBC7C8D928490E051811A10E978C66E3519A41352DD0699",
                                "last_results_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
                                "evidence_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
                                "proposer_address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA"
                            },
                            "commit": {
                                "height": 42,
                                "round": 0,
                                "block_id": {
                                    "hash": "F22BAEF4D99A835D9F2CA92C58E8AA48C589284B7916FF073A1D778C73EA4CC1",
                                    "parts": {
                                        "total": 1,
                                        "hash": "9961CC7B6B9BE558D0FED40675232F4B37BEE75419C815240804C1A1801CF626"
                                    }
                                },
                                "signatures": [
                                    {
                                        "block_id_flag": 2,
                                        "validator_address": "57DC09D28388DBF977CFC30EF50BE8B644CCC1FA",
                                        "timestamp": "2022-11-15T17:04:29.384867372Z",
                                        "signature": "0+INXvvzUExQToNpmQhhvFySbQYFqoYTpgFACP+3lkSWGh48ukkMMqj2UnnAzqQhabuKeXx/5f8hiwEzeMM6Dg=="
                                    }
                                ]
                            },
                            "dah": {
                                "row_roots": [
                                    "//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7",
                                    "/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4"
                                ],
                                "column_roots": [
                                    "//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7",
                                    "/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4"
                                ]
                            }
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "commit": {
                            "additionalProperties": false,
                            "properties": {
                                "block_id": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "hash": {
                                            "items": {
                                                "description": "Number is a number",
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "type": "array"
                                        },
                                        "parts": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "hash": {
                                                    "items": {
                                                        "description": "Number is a number",
                                                        "title": "number",
                                                        "type": "number"
                                                    },
                                                    "type": "array"
                                                },
                                                "total": {
                                                    "title": "number",
                                                    "type": "number"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                },
                                "height": {
                                    "title": "number",
                                    "type": "number"
                                },
                                "round": {
                                    "title": "number",
                                    "type": "number"
                                },
                                "signatures": {
                                    "items": {
                                        "additionalProperties": false,
                                        "properties": {
                                            "block_id_flag": {
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "signature": {
                                                "media": {
                                                    "binaryEncoding": "base64"
                                                },
                                                "type": "string"
                                            },
                                            "timestamp": {
                                                "format": "date-time",
                                                "type": "string"
                                            },
                                            "validator_address": {
                                                "items": {
                                                    "description": "Number is a number",
                                                    "title": "number",
                                                    "type": "number"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    },
                                    "type": "array"
                                }
                            },
                            "type": "object"
                        },
                        "dah": {
                            "additionalProperties": false,
                            "properties": {
                                "column_roots": {
                                    "items": {
                                        "media": {
                                            "binaryEncoding": "base64"
                                        },
                                        "type": "string"
                                    },
                                    "type": "array"
                                },
                                "row_roots": {
                                    "items": {
                                        "media": {
                                            "binaryEncoding": "base64"
                                        },
                                        "type": "string"
                                    },
                                    "type": "array"
                                }
                            },
                            "type": "object"
                        },
                        "header": {
                            "additionalProperties": false,
                            "properties": {
                                "app_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "chain_id": {
                                    "type": "string"
                                },
                                "consensus_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "data_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "evidence_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "height": {
                                    "title": "number",
                                    "type": "number"
                                },
                                "last_block_id": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "hash": {
                                            "items": {
                                                "description": "Number is a number",
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "type": "array"
                                        },
                                        "parts": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "hash": {
                                                    "items": {
                                                        "description": "Number is a number",
                                                        "title": "number",
                                                        "type": "number"
                                                    },
                                                    "type": "array"
                                                },
                                                "total": {
                                                    "title": "number",
                                                    "type": "number"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                },
                                "last_commit_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "last_results_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "next_validators_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "proposer_address": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "time": {
                                    "format": "date-time",
                                    "type": "string"
                                },
                                "validators_hash": {
                                    "items": {
                                        "description": "Number is a number",
                                        "title": "number",
                                        "type": "number"
                                    },
                                    "type": "array"
                                },
                                "version": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "app": {
                                            "title": "number",
                                            "type": "number"
                                        },
                                        "block": {
                                            "title": "number",
                                            "type": "number"
                                        }
                                    },
                                    "type": "object"
                                }
                            },
                            "type": "object"
                        },
                        "validator_set": {
                            "additionalProperties": false,
                            "properties": {
                                "proposer": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "address": {
                                            "items": {
                                                "description": "Number is a number",
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "type": "array"
                                        },
                                        "proposer_priority": {
                                            "title": "number",
                                            "type": "number"
                                        },
                                        "pub_key": {
                                            "additionalProperties": true
                                        },
                                        "voting_power": {
                                            "title": "number",
                                            "type": "number"
                                        }
                                    },
                                    "type": "object"
                                },
                                "validators": {
                                    "items": {
                                        "additionalProperties": false,
                                        "properties": {
                                            "address": {
                                                "items": {
                                                    "description": "Number is a number",
                                                    "title": "number",
                                                    "type": "number"
                                                },
                                                "type": "array"
                                            },
                                            "proposer_priority": {
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "pub_key": {
                                                "additionalProperties": true
                                            },
                                            "voting_power": {
                                                "title": "number",
                                                "type": "number"
                                            }
                                        },
                                        "type": "object"
                                    },
                                    "type": "array"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/header/service.go#L43"
            }
        },
        {
            "name": "header.IsSyncing",
            "description": "",
            "summary": "IsSyncing returns the status of sync\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "bool",
                "description": "bool",
                "summary": "",
                "schema": {
                    "examples": [
                        true
                    ],
                    "type": [
                        "boolean"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/header/service.go#L47"
            }
        },
        {
            "name": "share.ProbabilityOfAvailability",
            "description": "",
            "summary": "ProbabilityOfAvailability calculates the probability of the data square\nbeing available based on the number of samples collected.\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "float64",
                "description": "float64",
                "summary": "",
                "schema": {
                    "examples": [
                        42
                    ],
                    "type": [
                        "number"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/share/availability/light/availability.go#L125"
            }
        },
        {
            "name": "share.SharesAvailable",
            "description": "",
            "summary": "SharesAvailable subjectively validates if Shares committed to the given Root are available on the Network.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "dah",
                    "description": "*share.Root",
                    "summary": "",
                    "schema": {
                        "examples": [
                            {
                                "row_roots": [
                                    "Ynl0ZSBhcnJheQ=="
                                ],
                                "column_roots": [
                                    "Ynl0ZSBhcnJheQ=="
                                ]
                            }
                        ],
                        "additionalProperties": false,
                        "properties": {
                            "column_roots": {
                                "items": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                },
                                "type": "array"
                            },
                            "row_roots": {
                                "items": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                },
                                "type": "array"
                            }
                        },
                        "type": [
                            "object"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "Null",
                "description": "Null",
                "schema": {
                    "type": [
                        "null"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/share/availability/light/availability.go#L59"
            }
        },
        {
            "name": "state.AccountAddress",
            "description": "",
            "summary": "AccountAddress retrieves the address of the node's account/signer\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "Address",
                "description": "Address",
                "summary": "",
                "schema": {
                    "examples": [
                        "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                    ],
                    "additionalProperties": true
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L163"
            }
        },
        {
            "name": "state.Balance",
            "description": "",
            "summary": "Balance retrieves the Celestia coin balance for the node's account/signer\nand verifies it against the corresponding block's AppHash.\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "*Balance",
                "description": "*Balance",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "denom": "string value",
                            "amount": "42"
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "amount": {
                            "additionalProperties": false,
                            "type": "object"
                        },
                        "denom": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L171"
            }
        },
        {
            "name": "state.BalanceForAddress",
            "description": "",
            "summary": "BalanceForAddress retrieves the Celestia coin balance for the given address and verifies\nthe returned balance against the corresponding block's AppHash.\n\nNOTE: the balance returned is the balance reported by the block right before\nthe node's current head (head-1). This is due to the fact that for block N, the block's\n`AppHash` is the result of applying the previous block's transaction list.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "addr",
                    "description": "Address",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                        ],
                        "additionalProperties": true
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*Balance",
                "description": "*Balance",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "denom": "string value",
                            "amount": "42"
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "amount": {
                            "additionalProperties": false,
                            "type": "object"
                        },
                        "denom": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L179"
            }
        },
        {
            "name": "state.BeginRedelegate",
            "description": "",
            "summary": "BeginRedelegate sends a user's delegated tokens to a new validator for redelegation.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "srcValAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "dstValAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "amount",
                    "description": "Int",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "42"
                        ],
                        "additionalProperties": false,
                        "type": [
                            "object"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "gasLim",
                    "description": "uint64",
                    "summary": "",
                    "schema": {
                        "title": "number",
                        "description": "Number is a number",
                        "examples": [
                            42
                        ],
                        "type": [
                            "number"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*TxResponse",
                "description": "*TxResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "height": 30497,
                            "txhash": "05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282",
                            "data": "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
                            "raw_log": "[{\"msg_index\":0,\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]}]}]",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "events": [
                                        {
                                            "type": "coin_received",
                                            "attributes": [
                                                {
                                                    "key": "receiver",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "coin_spent",
                                            "attributes": [
                                                {
                                                    "key": "spender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "action",
                                                    "value": "/cosmos.bank.v1beta1.MsgSend"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "bank"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": 10000000,
                            "gas_used": 69085,
                            "events": [
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "ZmVl",
                                            "value": null,
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "YWNjX3NlcQ==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "c2lnbmF0dXJl",
                                            "value": "R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "YWN0aW9u",
                                            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_spent",
                                    "attributes": [
                                        {
                                            "key": "c3BlbmRlcg==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_received",
                                    "attributes": [
                                        {
                                            "key": "cmVjZWl2ZXI=",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "cmVjaXBpZW50",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "bW9kdWxl",
                                            "value": "YmFuaw==",
                                            "index": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "title": "number",
                            "type": "number"
                        },
                        "codespace": {
                            "type": "string"
                        },
                        "data": {
                            "type": "string"
                        },
                        "events": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "attributes": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "index": {
                                                    "type": "boolean"
                                                },
                                                "key": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "gas_used": {
                            "title": "number",
                            "type": "number"
                        },
                        "gas_wanted": {
                            "title": "number",
                            "type": "number"
                        },
                        "height": {
                            "title": "number",
                            "type": "number"
                        },
                        "info": {
                            "type": "string"
                        },
                        "logs": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "events": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "attributes": {
                                                    "items": {
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "key": {
                                                                "type": "string"
                                                            },
                                                            "value": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "type": "object"
                                                    },
                                                    "type": "array"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "log": {
                                        "type": "string"
                                    },
                                    "msg_index": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "raw_log": {
                            "type": "string"
                        },
                        "timestamp": {
                            "type": "string"
                        },
                        "tx": {
                            "additionalProperties": false,
                            "properties": {
                                "type_url": {
                                    "type": "string"
                                },
                                "value": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "txhash": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L303"
            }
        },
        {
            "name": "state.CancelUnbondingDelegation",
            "description": "",
            "summary": "CancelUnbondingDelegation cancels a user's pending undelegation from a validator.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "valAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "amount",
                    "description": "Int",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "42"
                        ],
                        "additionalProperties": false,
                        "type": [
                            "object"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "height",
                    "description": "Int",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "42"
                        ],
                        "additionalProperties": false,
                        "type": [
                            "object"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "gasLim",
                    "description": "uint64",
                    "summary": "",
                    "schema": {
                        "title": "number",
                        "description": "Number is a number",
                        "examples": [
                            42
                        ],
                        "type": [
                            "number"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*TxResponse",
                "description": "*TxResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "height": 30497,
                            "txhash": "05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282",
                            "data": "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
                            "raw_log": "[{\"msg_index\":0,\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]}]}]",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "events": [
                                        {
                                            "type": "coin_received",
                                            "attributes": [
                                                {
                                                    "key": "receiver",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "coin_spent",
                                            "attributes": [
                                                {
                                                    "key": "spender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "action",
                                                    "value": "/cosmos.bank.v1beta1.MsgSend"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "bank"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": 10000000,
                            "gas_used": 69085,
                            "events": [
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "ZmVl",
                                            "value": null,
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "YWNjX3NlcQ==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "c2lnbmF0dXJl",
                                            "value": "R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "YWN0aW9u",
                                            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_spent",
                                    "attributes": [
                                        {
                                            "key": "c3BlbmRlcg==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_received",
                                    "attributes": [
                                        {
                                            "key": "cmVjZWl2ZXI=",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "cmVjaXBpZW50",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "bW9kdWxl",
                                            "value": "YmFuaw==",
                                            "index": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "title": "number",
                            "type": "number"
                        },
                        "codespace": {
                            "type": "string"
                        },
                        "data": {
                            "type": "string"
                        },
                        "events": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "attributes": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "index": {
                                                    "type": "boolean"
                                                },
                                                "key": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "gas_used": {
                            "title": "number",
                            "type": "number"
                        },
                        "gas_wanted": {
                            "title": "number",
                            "type": "number"
                        },
                        "height": {
                            "title": "number",
                            "type": "number"
                        },
                        "info": {
                            "type": "string"
                        },
                        "logs": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "events": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "attributes": {
                                                    "items": {
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "key": {
                                                                "type": "string"
                                                            },
                                                            "value": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "type": "object"
                                                    },
                                                    "type": "array"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "log": {
                                        "type": "string"
                                    },
                                    "msg_index": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "raw_log": {
                            "type": "string"
                        },
                        "timestamp": {
                            "type": "string"
                        },
                        "tx": {
                            "additionalProperties": false,
                            "properties": {
                                "type_url": {
                                    "type": "string"
                                },
                                "value": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "txhash": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L279"
            }
        },
        {
            "name": "state.Delegate",
            "description": "",
            "summary": "Delegate sends a user's liquid tokens to a validator for delegation.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "delAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "amount",
                    "description": "Int",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "42"
                        ],
                        "additionalProperties": false,
                        "type": [
                            "object"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "gasLim",
                    "description": "uint64",
                    "summary": "",
                    "schema": {
                        "title": "number",
                        "description": "Number is a number",
                        "examples": [
                            42
                        ],
                        "type": [
                            "number"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*TxResponse",
                "description": "*TxResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "height": 30497,
                            "txhash": "05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282",
                            "data": "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
                            "raw_log": "[{\"msg_index\":0,\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]}]}]",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "events": [
                                        {
                                            "type": "coin_received",
                                            "attributes": [
                                                {
                                                    "key": "receiver",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "coin_spent",
                                            "attributes": [
                                                {
                                                    "key": "spender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "action",
                                                    "value": "/cosmos.bank.v1beta1.MsgSend"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "bank"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": 10000000,
                            "gas_used": 69085,
                            "events": [
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "ZmVl",
                                            "value": null,
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "YWNjX3NlcQ==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "c2lnbmF0dXJl",
                                            "value": "R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "YWN0aW9u",
                                            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_spent",
                                    "attributes": [
                                        {
                                            "key": "c3BlbmRlcg==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_received",
                                    "attributes": [
                                        {
                                            "key": "cmVjZWl2ZXI=",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "cmVjaXBpZW50",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "bW9kdWxl",
                                            "value": "YmFuaw==",
                                            "index": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "title": "number",
                            "type": "number"
                        },
                        "codespace": {
                            "type": "string"
                        },
                        "data": {
                            "type": "string"
                        },
                        "events": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "attributes": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "index": {
                                                    "type": "boolean"
                                                },
                                                "key": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "gas_used": {
                            "title": "number",
                            "type": "number"
                        },
                        "gas_wanted": {
                            "title": "number",
                            "type": "number"
                        },
                        "height": {
                            "title": "number",
                            "type": "number"
                        },
                        "info": {
                            "type": "string"
                        },
                        "logs": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "events": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "attributes": {
                                                    "items": {
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "key": {
                                                                "type": "string"
                                                            },
                                                            "value": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "type": "object"
                                                    },
                                                    "type": "array"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "log": {
                                        "type": "string"
                                    },
                                    "msg_index": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "raw_log": {
                            "type": "string"
                        },
                        "timestamp": {
                            "type": "string"
                        },
                        "tx": {
                            "additionalProperties": false,
                            "properties": {
                                "type_url": {
                                    "type": "string"
                                },
                                "value": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "txhash": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L350"
            }
        },
        {
            "name": "state.IsStopped",
            "description": "",
            "summary": "IsStopped checks if the Module's context has been stopped\n",
            "paramStructure": "by-position",
            "params": [],
            "result": {
                "name": "bool",
                "description": "bool",
                "summary": "",
                "schema": {
                    "examples": [
                        true
                    ],
                    "type": [
                        "boolean"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L416"
            }
        },
        {
            "name": "state.QueryDelegation",
            "description": "",
            "summary": "QueryDelegation retrieves the delegation information between a delegator and a validator.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "valAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*stakingtypes.QueryDelegationResponse",
                "description": "*stakingtypes.QueryDelegationResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "delegation_response": {
                                "delegation": {
                                    "delegator_address": "string value",
                                    "validator_address": "string value",
                                    "shares": "0"
                                },
                                "balance": {
                                    "denom": "string value",
                                    "amount": "42"
                                }
                            }
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "delegation_response": {
                            "additionalProperties": false,
                            "properties": {
                                "balance": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "amount": {
                                            "additionalProperties": false,
                                            "type": "object"
                                        },
                                        "denom": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                },
                                "delegation": {
                                    "additionalProperties": false,
                                    "properties": {
                                        "delegator_address": {
                                            "type": "string"
                                        },
                                        "shares": {
                                            "additionalProperties": false,
                                            "type": "object"
                                        },
                                        "validator_address": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L373"
            }
        },
        {
            "name": "state.QueryRedelegations",
            "description": "",
            "summary": "QueryRedelegations retrieves the status of the redelegations between a delegator and a validator.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "srcValAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "dstValAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*stakingtypes.QueryRedelegationsResponse",
                "description": "*stakingtypes.QueryRedelegationsResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "redelegation_responses": [
                                {
                                    "redelegation": {
                                        "delegator_address": "string value",
                                        "validator_src_address": "string value",
                                        "validator_dst_address": "string value",
                                        "entries": [
                                            {
                                                "creation_height": 42,
                                                "completion_time": "0001-01-01T00:00:00Z",
                                                "initial_balance": "42",
                                                "shares_dst": "0"
                                            }
                                        ]
                                    },
                                    "entries": [
                                        {
                                            "redelegation_entry": {
                                                "creation_height": 42,
                                                "completion_time": "0001-01-01T00:00:00Z",
                                                "initial_balance": "42",
                                                "shares_dst": "0"
                                            },
                                            "balance": "42"
                                        }
                                    ]
                                }
                            ],
                            "pagination": {
                                "next_key": "Ynl0ZSBhcnJheQ==",
                                "total": 42
                            }
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "pagination": {
                            "additionalProperties": false,
                            "properties": {
                                "next_key": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                },
                                "total": {
                                    "title": "number",
                                    "type": "number"
                                }
                            },
                            "type": "object"
                        },
                        "redelegation_responses": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "entries": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "balance": {
                                                    "additionalProperties": false,
                                                    "type": "object"
                                                },
                                                "redelegation_entry": {
                                                    "additionalProperties": false,
                                                    "properties": {
                                                        "completion_time": {
                                                            "format": "date-time",
                                                            "type": "string"
                                                        },
                                                        "creation_height": {
                                                            "title": "number",
                                                            "type": "number"
                                                        },
                                                        "initial_balance": {
                                                            "additionalProperties": false,
                                                            "type": "object"
                                                        },
                                                        "shares_dst": {
                                                            "additionalProperties": false,
                                                            "type": "object"
                                                        }
                                                    },
                                                    "type": "object"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "redelegation": {
                                        "additionalProperties": false,
                                        "properties": {
                                            "delegator_address": {
                                                "type": "string"
                                            },
                                            "entries": {
                                                "items": {
                                                    "additionalProperties": false,
                                                    "properties": {
                                                        "completion_time": {
                                                            "format": "date-time",
                                                            "type": "string"
                                                        },
                                                        "creation_height": {
                                                            "title": "number",
                                                            "type": "number"
                                                        },
                                                        "initial_balance": {
                                                            "additionalProperties": false,
                                                            "type": "object"
                                                        },
                                                        "shares_dst": {
                                                            "additionalProperties": false,
                                                            "type": "object"
                                                        }
                                                    },
                                                    "type": "object"
                                                },
                                                "type": "array"
                                            },
                                            "validator_dst_address": {
                                                "type": "string"
                                            },
                                            "validator_src_address": {
                                                "type": "string"
                                            }
                                        },
                                        "type": "object"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L400"
            }
        },
        {
            "name": "state.QueryUnbonding",
            "description": "",
            "summary": "QueryUnbonding retrieves the unbonding status between a delegator and a validator.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "valAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*stakingtypes.QueryUnbondingDelegationResponse",
                "description": "*stakingtypes.QueryUnbondingDelegationResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "unbond": {
                                "delegator_address": "string value",
                                "validator_address": "string value",
                                "entries": [
                                    {
                                        "creation_height": 42,
                                        "completion_time": "0001-01-01T00:00:00Z",
                                        "initial_balance": "42",
                                        "balance": "42"
                                    }
                                ]
                            }
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "unbond": {
                            "additionalProperties": false,
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                },
                                "entries": {
                                    "items": {
                                        "additionalProperties": false,
                                        "properties": {
                                            "balance": {
                                                "additionalProperties": false,
                                                "type": "object"
                                            },
                                            "completion_time": {
                                                "format": "date-time",
                                                "type": "string"
                                            },
                                            "creation_height": {
                                                "title": "number",
                                                "type": "number"
                                            },
                                            "initial_balance": {
                                                "additionalProperties": false,
                                                "type": "object"
                                            }
                                        },
                                        "type": "object"
                                    },
                                    "type": "array"
                                },
                                "validator_address": {
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L387"
            }
        },
        {
            "name": "state.SubmitPayForData",
            "description": "",
            "summary": "SubmitPayForData builds, signs and submits a PayForData transaction.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "nID",
                    "description": "namespace.ID",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "Bw=="
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "data",
                    "description": "[]byte",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "Ynl0ZSBhcnJheQ=="
                        ],
                        "type": [
                            "string"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "gasLim",
                    "description": "uint64",
                    "summary": "",
                    "schema": {
                        "title": "number",
                        "description": "Number is a number",
                        "examples": [
                            42
                        ],
                        "type": [
                            "number"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*TxResponse",
                "description": "*TxResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "height": 30497,
                            "txhash": "05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282",
                            "data": "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
                            "raw_log": "[{\"msg_index\":0,\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]}]}]",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "events": [
                                        {
                                            "type": "coin_received",
                                            "attributes": [
                                                {
                                                    "key": "receiver",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "coin_spent",
                                            "attributes": [
                                                {
                                                    "key": "spender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "action",
                                                    "value": "/cosmos.bank.v1beta1.MsgSend"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "bank"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": 10000000,
                            "gas_used": 69085,
                            "events": [
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "ZmVl",
                                            "value": null,
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "YWNjX3NlcQ==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "c2lnbmF0dXJl",
                                            "value": "R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "YWN0aW9u",
                                            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_spent",
                                    "attributes": [
                                        {
                                            "key": "c3BlbmRlcg==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_received",
                                    "attributes": [
                                        {
                                            "key": "cmVjZWl2ZXI=",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "cmVjaXBpZW50",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "bW9kdWxl",
                                            "value": "YmFuaw==",
                                            "index": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "title": "number",
                            "type": "number"
                        },
                        "codespace": {
                            "type": "string"
                        },
                        "data": {
                            "type": "string"
                        },
                        "events": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "attributes": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "index": {
                                                    "type": "boolean"
                                                },
                                                "key": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "gas_used": {
                            "title": "number",
                            "type": "number"
                        },
                        "gas_wanted": {
                            "title": "number",
                            "type": "number"
                        },
                        "height": {
                            "title": "number",
                            "type": "number"
                        },
                        "info": {
                            "type": "string"
                        },
                        "logs": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "events": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "attributes": {
                                                    "items": {
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "key": {
                                                                "type": "string"
                                                            },
                                                            "value": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "type": "object"
                                                    },
                                                    "type": "array"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "log": {
                                        "type": "string"
                                    },
                                    "msg_index": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "raw_log": {
                            "type": "string"
                        },
                        "timestamp": {
                            "type": "string"
                        },
                        "tx": {
                            "additionalProperties": false,
                            "properties": {
                                "type_url": {
                                    "type": "string"
                                },
                                "value": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "txhash": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L148"
            }
        },
        {
            "name": "state.SubmitTx",
            "description": "",
            "summary": "SubmitTx submits the given transaction/message to the\nCelestia network and blocks until the tx is included in\na block.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "tx",
                    "description": "Tx",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "Bw=="
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*TxResponse",
                "description": "*TxResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "height": 30497,
                            "txhash": "05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282",
                            "data": "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
                            "raw_log": "[{\"msg_index\":0,\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]}]}]",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "events": [
                                        {
                                            "type": "coin_received",
                                            "attributes": [
                                                {
                                                    "key": "receiver",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "coin_spent",
                                            "attributes": [
                                                {
                                                    "key": "spender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "action",
                                                    "value": "/cosmos.bank.v1beta1.MsgSend"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "bank"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": 10000000,
                            "gas_used": 69085,
                            "events": [
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "ZmVl",
                                            "value": null,
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "YWNjX3NlcQ==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "c2lnbmF0dXJl",
                                            "value": "R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "YWN0aW9u",
                                            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_spent",
                                    "attributes": [
                                        {
                                            "key": "c3BlbmRlcg==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_received",
                                    "attributes": [
                                        {
                                            "key": "cmVjZWl2ZXI=",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "cmVjaXBpZW50",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "bW9kdWxl",
                                            "value": "YmFuaw==",
                                            "index": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "title": "number",
                            "type": "number"
                        },
                        "codespace": {
                            "type": "string"
                        },
                        "data": {
                            "type": "string"
                        },
                        "events": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "attributes": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "index": {
                                                    "type": "boolean"
                                                },
                                                "key": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "gas_used": {
                            "title": "number",
                            "type": "number"
                        },
                        "gas_wanted": {
                            "title": "number",
                            "type": "number"
                        },
                        "height": {
                            "title": "number",
                            "type": "number"
                        },
                        "info": {
                            "type": "string"
                        },
                        "logs": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "events": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "attributes": {
                                                    "items": {
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "key": {
                                                                "type": "string"
                                                            },
                                                            "value": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "type": "object"
                                                    },
                                                    "type": "array"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "log": {
                                        "type": "string"
                                    },
                                    "msg_index": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "raw_log": {
                            "type": "string"
                        },
                        "timestamp": {
                            "type": "string"
                        },
                        "tx": {
                            "additionalProperties": false,
                            "properties": {
                                "type_url": {
                                    "type": "string"
                                },
                                "value": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "txhash": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L236"
            }
        },
        {
            "name": "state.Transfer",
            "description": "",
            "summary": "Transfer sends the given amount of coins from default wallet of the node to the given account\naddress.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "addr",
                    "description": "AccAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "amount",
                    "description": "Int",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "42"
                        ],
                        "additionalProperties": false,
                        "type": [
                            "object"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "gasLim",
                    "description": "uint64",
                    "summary": "",
                    "schema": {
                        "title": "number",
                        "description": "Number is a number",
                        "examples": [
                            42
                        ],
                        "type": [
                            "number"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*TxResponse",
                "description": "*TxResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "height": 30497,
                            "txhash": "05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282",
                            "data": "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
                            "raw_log": "[{\"msg_index\":0,\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]}]}]",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "events": [
                                        {
                                            "type": "coin_received",
                                            "attributes": [
                                                {
                                                    "key": "receiver",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "coin_spent",
                                            "attributes": [
                                                {
                                                    "key": "spender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "action",
                                                    "value": "/cosmos.bank.v1beta1.MsgSend"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "bank"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": 10000000,
                            "gas_used": 69085,
                            "events": [
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "ZmVl",
                                            "value": null,
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "YWNjX3NlcQ==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "c2lnbmF0dXJl",
                                            "value": "R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "YWN0aW9u",
                                            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_spent",
                                    "attributes": [
                                        {
                                            "key": "c3BlbmRlcg==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_received",
                                    "attributes": [
                                        {
                                            "key": "cmVjZWl2ZXI=",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "cmVjaXBpZW50",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "bW9kdWxl",
                                            "value": "YmFuaw==",
                                            "index": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "title": "number",
                            "type": "number"
                        },
                        "codespace": {
                            "type": "string"
                        },
                        "data": {
                            "type": "string"
                        },
                        "events": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "attributes": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "index": {
                                                    "type": "boolean"
                                                },
                                                "key": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "gas_used": {
                            "title": "number",
                            "type": "number"
                        },
                        "gas_wanted": {
                            "title": "number",
                            "type": "number"
                        },
                        "height": {
                            "title": "number",
                            "type": "number"
                        },
                        "info": {
                            "type": "string"
                        },
                        "logs": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "events": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "attributes": {
                                                    "items": {
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "key": {
                                                                "type": "string"
                                                            },
                                                            "value": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "type": "object"
                                                    },
                                                    "type": "array"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "log": {
                                        "type": "string"
                                    },
                                    "msg_index": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "raw_log": {
                            "type": "string"
                        },
                        "timestamp": {
                            "type": "string"
                        },
                        "tx": {
                            "additionalProperties": false,
                            "properties": {
                                "type_url": {
                                    "type": "string"
                                },
                                "value": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "txhash": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L256"
            }
        },
        {
            "name": "state.Undelegate",
            "description": "",
            "summary": "Undelegate undelegates a user's delegated tokens, unbonding them from the current validator.\n",
            "paramStructure": "by-position",
            "params": [
                {
                    "name": "delAddr",
                    "description": "ValAddress",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p"
                        ],
                        "items": [
                            {
                                "title": "number",
                                "description": "Number is a number",
                                "type": [
                                    "number"
                                ]
                            }
                        ],
                        "type": [
                            "array"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "amount",
                    "description": "Int",
                    "summary": "",
                    "schema": {
                        "examples": [
                            "42"
                        ],
                        "additionalProperties": false,
                        "type": [
                            "object"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                },
                {
                    "name": "gasLim",
                    "description": "uint64",
                    "summary": "",
                    "schema": {
                        "title": "number",
                        "description": "Number is a number",
                        "examples": [
                            42
                        ],
                        "type": [
                            "number"
                        ]
                    },
                    "required": true,
                    "deprecated": false
                }
            ],
            "result": {
                "name": "*TxResponse",
                "description": "*TxResponse",
                "summary": "",
                "schema": {
                    "examples": [
                        {
                            "height": 30497,
                            "txhash": "05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282",
                            "data": "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
                            "raw_log": "[{\"msg_index\":0,\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw\"},{\"key\":\"sender\",\"value\":\"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h\"},{\"key\":\"amount\",\"value\":\"30utia\"}]}]}]",
                            "logs": [
                                {
                                    "msg_index": 0,
                                    "events": [
                                        {
                                            "type": "coin_received",
                                            "attributes": [
                                                {
                                                    "key": "receiver",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "coin_spent",
                                            "attributes": [
                                                {
                                                    "key": "spender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "message",
                                            "attributes": [
                                                {
                                                    "key": "action",
                                                    "value": "/cosmos.bank.v1beta1.MsgSend"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "module",
                                                    "value": "bank"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "transfer",
                                            "attributes": [
                                                {
                                                    "key": "recipient",
                                                    "value": "celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"
                                                },
                                                {
                                                    "key": "sender",
                                                    "value": "celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"
                                                },
                                                {
                                                    "key": "amount",
                                                    "value": "30utia"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "gas_wanted": 10000000,
                            "gas_used": 69085,
                            "events": [
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "ZmVl",
                                            "value": null,
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "YWNjX3NlcQ==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "tx",
                                    "attributes": [
                                        {
                                            "key": "c2lnbmF0dXJl",
                                            "value": "R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "YWN0aW9u",
                                            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_spent",
                                    "attributes": [
                                        {
                                            "key": "c3BlbmRlcg==",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "coin_received",
                                    "attributes": [
                                        {
                                            "key": "cmVjZWl2ZXI=",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "transfer",
                                    "attributes": [
                                        {
                                            "key": "cmVjaXBpZW50",
                                            "value": "Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=",
                                            "index": true
                                        },
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        },
                                        {
                                            "key": "YW1vdW50",
                                            "value": "MzB1dGlh",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "c2VuZGVy",
                                            "value": "Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=",
                                            "index": true
                                        }
                                    ]
                                },
                                {
                                    "type": "message",
                                    "attributes": [
                                        {
                                            "key": "bW9kdWxl",
                                            "value": "YmFuaw==",
                                            "index": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "title": "number",
                            "type": "number"
                        },
                        "codespace": {
                            "type": "string"
                        },
                        "data": {
                            "type": "string"
                        },
                        "events": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "attributes": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "index": {
                                                    "type": "boolean"
                                                },
                                                "key": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "media": {
                                                        "binaryEncoding": "base64"
                                                    },
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "gas_used": {
                            "title": "number",
                            "type": "number"
                        },
                        "gas_wanted": {
                            "title": "number",
                            "type": "number"
                        },
                        "height": {
                            "title": "number",
                            "type": "number"
                        },
                        "info": {
                            "type": "string"
                        },
                        "logs": {
                            "items": {
                                "additionalProperties": false,
                                "properties": {
                                    "events": {
                                        "items": {
                                            "additionalProperties": false,
                                            "properties": {
                                                "attributes": {
                                                    "items": {
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "key": {
                                                                "type": "string"
                                                            },
                                                            "value": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "type": "object"
                                                    },
                                                    "type": "array"
                                                },
                                                "type": {
                                                    "type": "string"
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "log": {
                                        "type": "string"
                                    },
                                    "msg_index": {
                                        "title": "number",
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "raw_log": {
                            "type": "string"
                        },
                        "timestamp": {
                            "type": "string"
                        },
                        "tx": {
                            "additionalProperties": false,
                            "properties": {
                                "type_url": {
                                    "type": "string"
                                },
                                "value": {
                                    "media": {
                                        "binaryEncoding": "base64"
                                    },
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "txhash": {
                            "type": "string"
                        }
                    },
                    "type": [
                        "object"
                    ]
                },
                "required": true,
                "deprecated": false
            },
            "deprecated": false,
            "externalDocs": {
                "description": "Source of the default service's implementation of this method.",
                "url": "https://github.com/celestiaorg/celestia-node/blob/main/state/core_access.go#L327"
            }
        }
    ]
}




"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[90626],{41837:e=>{e.exports=JSON.parse('{"url":"https://api.obol.tech/docs-json","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.0","paths":{"/":{"get":{"operationId":"AppController_redirect","summary":"Redirect to the API docs","description":"Hitting the root of the domain redirects to /docs and a swagger deployment.","parameters":[],"responses":{"200":{"description":"","content":{"application/json":{"schema":{"type":"object"}}}}},"tags":["System"]}},"/_health":{"get":{"operationId":"HealthController_check","summary":"Check the API health","description":"This endpoint reports the API and its dependencies health.","parameters":[],"responses":{"200":{"description":"The Health Check is successful","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","example":"ok"},"info":{"type":"object","example":{"database":{"status":"up"}},"additionalProperties":{"type":"object","properties":{"status":{"type":"string"}},"additionalProperties":{"type":"string"}},"nullable":true},"error":{"type":"object","example":{},"additionalProperties":{"type":"object","properties":{"status":{"type":"string"}},"additionalProperties":{"type":"string"}},"nullable":true},"details":{"type":"object","example":{"database":{"status":"up"}},"additionalProperties":{"type":"object","properties":{"status":{"type":"string"}},"additionalProperties":{"type":"string"}}}}}}}},"503":{"description":"The Health Check is not successful","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","example":"error"},"info":{"type":"object","example":{"database":{"status":"up"}},"additionalProperties":{"type":"object","properties":{"status":{"type":"string"}},"additionalProperties":{"type":"string"}},"nullable":true},"error":{"type":"object","example":{"redis":{"status":"down","message":"Could not connect"}},"additionalProperties":{"type":"object","properties":{"status":{"type":"string"}},"additionalProperties":{"type":"string"}},"nullable":true},"details":{"type":"object","example":{"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}},"additionalProperties":{"type":"object","properties":{"status":{"type":"string"}},"additionalProperties":{"type":"string"}}}}}}}}},"tags":["System"]}},"/metrics":{"get":{"operationId":"MetricsController_metrics","parameters":[],"responses":{"200":{"description":"","content":{"application/json":{"schema":{"type":"string"}}}}}}},"/dv/{configHash}":{"get":{"operationId":"DVController_getClusterDefinition","summary":"Retrieve a Distributed Validator Cluster proposal","description":"This endpoint allows a charon client or launchpad interface to retrieve the terms of a proposed DKG. Once all operators listed in the DKG have submitted signed approvals to the terms, this object will be ready for a cluster of operators to use as part of a DKG ceremony. If the objects in the `operators` array are not fully populated, these operators need to use the [PUT request](#/Distributed%20Validators/DVController_updateClusterDefinition) to upload their charon client\'s public key and a signature from their address to indicate their acceptance of the terms.","parameters":[{"name":"configHash","required":true,"in":"path","description":"The `config_hash` calculated for a cluster definition.","schema":{"type":"string"}}],"responses":{"200":{"description":"The cluster object","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/ClusterDefinitionResponse"}]}}}}},"tags":["Distributed Validators"]},"put":{"operationId":"DVController_updateClusterDefinition","summary":"Accept a proposed Distributed Validator Cluster","description":"This endpoint is used by the operators present in the `operators` array of a cluster definition. These operators must submit a public key (in ENR form) to serve as their identity during the DKG, along with EIP712 signatures indicating their acceptance of the terms of this DKG.","parameters":[{"name":"authorization","required":true,"in":"header","description":"EIP712 operator hash as bearer token","schema":{"type":"string"}},{"name":"configHash","required":true,"in":"path","description":"The `config_hash` calculated for a cluster definition.","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OperatorDto"}}}},"responses":{"200":{"description":"The cluster object","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/ClusterDefinitionResponse"}]}}}}},"tags":["Distributed Validators"],"security":[{"bearer":[]}]},"delete":{"operationId":"DVController_deleteClusterDefinition","summary":"Delete a Distributed Validator Cluster proposal","description":"This endpoint allows the caller to delete an unwanted DKG ceremony proposal.","parameters":[{"name":"configHash","required":true,"in":"path","description":"The `config_hash` calculated for a cluster definition.","schema":{"type":"string"}}],"responses":{"200":{"description":"","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ClusterDefinitionResponse"}}}}},"tags":["Distributed Validators"],"security":[{"bearer":[]}]}},"/dv/operator/{address}":{"get":{"operationId":"DVController_getClusterDefinitionWithOperator","summary":"Retrieve a list of cluster definitions which the address belongs to.","description":"This endpoint allows a charon client or launchpad interface to fetch a specific number of cluster definitions which the address is part of for each page.","parameters":[{"name":"address","required":true,"in":"path","description":"The operator address","schema":{"type":"string"}},{"name":"page","required":true,"in":"query","schema":{"type":"number"}},{"name":"limit","required":true,"in":"query","schema":{"type":"number"}}],"responses":{"200":{"description":"A list of cluster definitions which the operator is part of","content":{"application/json":{"schema":{"type":"ClusterDefinitionWithOperatorResponse"}}}}},"tags":["Distributed Validators"]}},"/dv":{"post":{"operationId":"DVController_postClusterDefinition","summary":"Propose a new Distributed Validator Cluster","description":"This endpoint allows the caller to propose a distributed key generation ceremony. The caller must specify the configuration of a Distributed Validator Cluster; such as the participating operators and the validator exit details. Operators invited to participate in this cluster must submit a public key (in [ENR](https://docs.obol.tech/docs/v0.12.0/int/faq/errors#enrs-keys) form) to serve as their node\'s identity, along with EIP712 signatures indicating their acceptance of the terms of this cluster.","parameters":[{"name":"authorization","required":true,"in":"header","description":"EIP712 cluster definition hash as bearer token","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ClusterDefDto"}}}},"responses":{"201":{"description":"The cluster object","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/ClusterDefinitionResponse"}]}}}}},"tags":["Distributed Validators"],"security":[{"bearer":[]}]}},"/lock/{lockHash}":{"get":{"operationId":"LockController_getClusterLock","summary":"Retrieve a Distributed Validator Cluster Lock Object","description":"This endpoint is used to retrieve the validator lock file","parameters":[{"name":"lockHash","required":true,"in":"path","description":"The `lock_hash` calculated for a cluster lock.","schema":{"type":"string"}}],"responses":{"200":{"description":"The cluster lock object","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/ClusterLockResponse"}]}}}}},"tags":["Cluster Lock"]},"delete":{"operationId":"LockController_deleteClusterLock","summary":"Delete a lock file","description":"This endpoint allows the caller to delete a cluster lock.","parameters":[{"name":"lockHash","required":true,"in":"path","description":"The `lock_hash` calculated for a cluster lock.","schema":{"type":"string"}}],"responses":{"200":{"description":"","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ClusterLockResponse"}}}}},"tags":["Cluster Lock"]}},"/lock/configHash/{configHash}":{"get":{"operationId":"LockController_getLockByConfigHash","summary":"Retrieve a Distributed Validator Cluster Lock Object","description":"This endpoint is used to retrieve the validator lock file By Config Hash","parameters":[{"name":"configHash","required":true,"in":"path","description":"The `config_hash` calculated for a cluster config.","schema":{"type":"string"}}],"responses":{"200":{"description":"The cluster lock object","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/ClusterLockResponse"}]}}}}},"tags":["Cluster Lock"]}},"/lock/{lockHash}/launchpad":{"get":{"operationId":"LockController_redirectToClusterStatus","summary":"Redirect to the launchpad cluster status page","description":"This endpoint is used to redirect users easily the cluster status page after dkg","parameters":[{"name":"lockHash","required":true,"in":"path","description":"The `lockHash` calculated for a cluster lock.","schema":{"type":"string"}}],"responses":{"200":{"description":""}},"tags":["Cluster Lock"]}},"/lock/operator/{address}":{"get":{"operationId":"LockController_getClusterDefinitionWithOperator","summary":"Retrieve a list of cluster locks which the address belongs to.","description":"This endpoint allows a charon client or launchpad interface to fetch a specific number of cluster locks which the address is part of for each page.","parameters":[{"name":"address","required":true,"in":"path","description":"The operator address","schema":{"type":"string"}},{"name":"page","required":true,"in":"query","schema":{"type":"number"}},{"name":"limit","required":true,"in":"query","schema":{"type":"number"}}],"responses":{"200":{"description":"A list of cluster locks which the operator is part of","content":{"application/json":{"schema":{"type":"ClusterLockWithOperatorResponse"}}}}},"tags":["Cluster Lock"]}},"/lock":{"post":{"operationId":"LockController_postClusterLock","summary":"Push Distributed Validator Cluster Lock Data","description":"This endpoint saves lock file data including BLS public keys created during the DKG phase into our DB.","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ClusterLockDto"}}}},"responses":{"201":{"description":"The cluster lock object","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/ClusterLockResponse"}]}}}}},"tags":["Cluster Lock"]}},"/lock/verify":{"post":{"operationId":"LockController_verifyClusterLock","summary":"Verify Distributed Validator Cluster Lock Data","description":"This endpoint verifies lock file data including BLS public keys created during the DKG phase.","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ClusterLockDto"}}}},"responses":{"200":{"description":""},"201":{"description":"The cluster lock object"}},"tags":["Cluster Lock"]}},"/state/{configHash}":{"get":{"operationId":"StateController_getDistributedValidatorStates","summary":"Retrieve the Validator states for a cluster","description":"This endpoint is used to retrieve the states of all validators in a DV Cluster","parameters":[{"name":"configHash","required":true,"in":"path","description":"The `config_hash` calculated for a cluster definition.","schema":{"type":"string"}}],"responses":{"200":{"description":"A map of pubkeys to DVState","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/Map"}]}}}}},"tags":["State"]}},"/exp/exit/{lockHash}/{shareIdx}/{validatorPubkey}":{"get":{"operationId":"LidoController_getClusterLidoExit","summary":"Retrieve Lido Distributed Validator threshold aggregated signed exit msg","description":"This endpoint is used to retrieve lido validator exit message","parameters":[{"name":"validatorPubkey","required":true,"in":"path","description":"The `distributed_public_key` in a cluster lock.","schema":{"type":"string"}}],"responses":{"200":{"description":"The DV signed exit message","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/LidoExitBlob"}]}}}}},"tags":["Lido Exit"],"security":[{"bearer":[]}]}},"/exp/partial_exits/{lockHash}":{"post":{"operationId":"LidoController_postLidoPartialExit","summary":"Push Lido Distributed Validator partial signed exit message","description":"This endpoint saves partial signed exit messages.","parameters":[{"name":"lockHash","required":true,"in":"path","description":"The `lockHash` of the cluster which the validator belongs to","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/LidoExitsDto"}}}},"responses":{"201":{"description":"success message"}},"tags":["Lido Exit"]}},"/exp/{validator_pubkey}":{"delete":{"operationId":"LidoController_deleteExitBlob","summary":"Delete an exit blob","description":"This endpoint allows the caller to delete an exit blob.","parameters":[{"name":"validator_pubkey","required":true,"in":"path","description":"The `validator_pubkey` in cluster lock.","schema":{"type":"string"}}],"responses":{"200":{"description":""}},"tags":["Lido Exit"],"security":[{"bearer":[]}]}},"/effectiveness/{lockHash}":{"get":{"operationId":"EffectivenessController_getClusterLock","summary":"Retrieve a Distributed Validator Cluster Effectiveness Object","description":"This endpoint is used to retrieve the effectiveness of a cluster by pubkey","parameters":[{"name":"lockHash","required":true,"in":"path","description":"The `lock_hash` calculated for a cluster lock.","schema":{"type":"string"}}],"responses":{"200":{"description":"The cluster lock object","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/ClusterEffectivenessResponse"}]}}}}},"tags":["Cluster Effectiveness"]}}},"info":{"title":"Obol API","description":"## What is this API?\\n\\nThis API is for creating and managing [Distributed Validators](https://docs.obol.tech/docs/int/key-concepts#distributed-validator). This API works in tandem with Obol\'s [Distributed Validator Launchpad](https://goerli.launchpad.obol.tech), a dapp designed to allow people to authenticate their counterparties and agree to the terms of a Distributed Validator Cluster. This API will be made more easy for code-only interaction in the coming quarters with the release of the Obol-SDK. \\n\\nRead more about Obol and how to use the [launchpad](https://goerli.launchpad.obol.tech) on our [docs site](https://docs.obol.tech/). \\n\\nFor enquiries:","version":"v1.0.0-local","contact":{"name":"Obol Labs","url":"https://obol.tech","email":"support@obol.tech"}},"tags":[{"name":"Distributed Validators","description":"Configuration for distributed validator key generation ceremonies."},{"name":"System","description":"System related endpoints."}],"servers":[{"url":"https://api.obol.tech/","description":"Production environment"},{"url":"http://localhost:3000","description":"Local development server"},{"url":"https://localhost","description":"HTTPS Local development server"}],"components":{"securitySchemes":{"bearer":{"scheme":"bearer","bearerFormat":"JWT","type":"http"}},"schemas":{"Creator":{"type":"object","properties":{}},"Validator":{"type":"object","properties":{}},"Operator":{"type":"object","properties":{}},"ClusterDefinitionResponse":{"type":"object","properties":{"name":{"type":"string","example":"My Obol Cluster"},"uuid":{"type":"string","example":"0194FDC2-FA2F-FCC0-41D3-FF12045B73C8"},"creator":{"$ref":"#/components/schemas/Creator"},"version":{"type":"string","example":"v1.5.0"},"num_validators":{"type":"number","example":5},"threshold":{"type":"number","example":3},"dkg_algorithm":{"type":"string","example":"default"},"fork_version":{"type":"string","example":"0x00001020"},"config_hash":{"type":"string","description":"config_hash is a 32 bytes SSZ hash of cluster config.","example":"0x2204ba6c238ed2d6a8ff951d4513db993c8d6f8860468391342649bf735a87d7"},"timestamp":{"type":"string","example":"2022-07-19T18:19:58+02:00"},"validators":{"type":"array","items":{"$ref":"#/components/schemas/Validator"}},"definition_hash":{"type":"string","description":"definition_hash is a 32 bytes SSZ hash of cluster config.","example":"0xb656f5a4a5537b5817d6bcf735d043f17f5aff568b1a7ec9102a9f687bd4510c"},"fee_recipient_address":{"type":"string","description":"Ethereum address to receive transaction fees.","example":"0x000000000000000000000000000000000000dead"},"withdrawal_address":{"type":"string","description":"Ethereum address to receive staked ether.","example":"0x000000000000000000000000000000000000dead"},"operators":{"type":"array","items":{"$ref":"#/components/schemas/Operator"}}},"required":["name","uuid","creator","version","num_validators","threshold","dkg_algorithm","fork_version","config_hash","timestamp","validators","definition_hash","fee_recipient_address","withdrawal_address","operators"]},"OperatorDto":{"type":"object","properties":{"address":{"type":"string","description":"Ethereum address of Operator.","example":"0x000000000000000000000000000000000000dead"},"enr":{"type":"string","example":"enr://5fb90badb37c5821b6d95526a41a9504680b4e7c8b763a1b1d49d4955c848621"},"fork_version":{"type":"string","example":"0x00001020"},"version":{"type":"string","example":"v1.4.0"},"enr_signature":{"type":"string","example":"0x1199fc4440aa7929905ec171ed1dad82a9f6a89891193b2b4cf45937a8cf9ece4972e02bc7e23d8b8b2e550b6430693ac6bc8c82a0509f65d0abb34d7ae0a8a81c"},"config_signature":{"type":"string","example":"0x1199fc4440aa7929905ec171ed1dad82a9f6a89891193b2b4cf45937a8cf9ece4972e02bc7e23d8b8b2e550b6430693ac6bc8c82a0509f65d0abb34d7ae0a8a81c"}},"required":["address","enr","fork_version","version","enr_signature","config_signature"]},"CreatorDto":{"type":"object","properties":{"address":{"type":"string","description":"Ethereum address of Creator.","example":"0x000000000000000000000000000000000000dead"},"config_signature":{"type":"string","example":"0x1199fc4440aa7929905ec171ed1dad82a9f6a89891193b2b4cf45937a8cf9ece4972e02bc7e23d8b8b2e550b6430693ac6bc8c82a0509f65d0abb34d7ae0a8a81c"}},"required":["address","config_signature"]},"ClusterDefValidator":{"type":"object","properties":{"fee_recipient_address":{"type":"string","description":"Ethereum address to receive transaction fees.","example":"0x000000000000000000000000000000000000dead"},"withdrawal_address":{"type":"string","description":"Ethereum address to receive staked ether.","example":"0x000000000000000000000000000000000000dead"}},"required":["fee_recipient_address","withdrawal_address"]},"ClusterDefDto":{"type":"object","properties":{"name":{"type":"string","example":"My Obol Cluster"},"operators":{"type":"array","items":{"$ref":"#/components/schemas/OperatorDto"}},"creator":{"$ref":"#/components/schemas/CreatorDto"},"uuid":{"type":"string","example":"0194FDC2-FA2F-FCC0-41D3-FF12045B73C8"},"version":{"type":"string","example":"v1.5.0"},"num_validators":{"type":"number","minimum":1,"example":5},"threshold":{"type":"number","minimum":1,"example":3},"dkg_algorithm":{"type":"string","example":"default"},"fork_version":{"type":"string","example":"0x00001020"},"timestamp":{"type":"string","example":"2022-07-19T18:19:58+02:00"},"validators":{"type":"array","items":{"$ref":"#/components/schemas/ClusterDefValidator"}},"config_hash":{"type":"string","example":"0x29b0223beea5f4f74391f445d15afd4294040374f6924b98cbf8713f8d962d7c"}},"required":["name","operators","creator","uuid","version","num_validators","threshold","dkg_algorithm","fork_version","timestamp","validators","config_hash"]},"DistributedValidator":{"type":"object","properties":{}},"ClusterLockResponse":{"type":"object","properties":{"cluster_definition":{"description":"Cluster definition data that was used in dkg to generate cluster lock.","allOf":[{"$ref":"#/components/schemas/ClusterDefinitionResponse"}]},"distributed_validators":{"type":"array","items":{"$ref":"#/components/schemas/DistributedValidator"}},"signature_aggregate":{"type":"string","example":"0x85650c30ec29a3703934bf50a28da102975deda77e758579ea3dfe4136abf752"},"lock_hash":{"type":"string","example":"0xd2880980169ee4a0000f23feb8fad9a6c70f38312956fe67aa89e118f5b0e048"},"node_signatures":{"type":"array","items":{"type":"string"}}},"required":["cluster_definition","distributed_validators","signature_aggregate","lock_hash","node_signatures"]},"DepositData":{"type":"object","properties":{}},"BuilderRegistration":{"type":"object","properties":{}},"DistributedValidatorDto":{"type":"object","properties":{"distributed_public_key":{"type":"string"},"public_shares":{"type":"array","items":{"type":"string"}},"deposit_data":{"description":"Deposit data for validator activation.","allOf":[{"$ref":"#/components/schemas/DepositData"}]},"builder_registration":{"description":"Pre-generated signed validator builder registration.","allOf":[{"$ref":"#/components/schemas/BuilderRegistration"}]}},"required":["distributed_public_key","public_shares","deposit_data","builder_registration"]},"ClusterLockDto":{"type":"object","properties":{"cluster_definition":{"description":"Cluster definition data that was used in dkg to generate cluster lock.","allOf":[{"$ref":"#/components/schemas/ClusterDefinitionResponse"}]},"distributed_validators":{"type":"array","items":{"$ref":"#/components/schemas/DistributedValidatorDto"}},"signature_aggregate":{"type":"string","example":"0x85650c30ec29a3703934bf50a28da102975deda77e758579ea3dfe4136abf752"},"lock_hash":{"type":"string","example":"0xd2880980169ee4a0000f23feb8fad9a6c70f38312956fe67aa89e118f5b0e048"},"node_signatures":{"type":"array","items":{"type":"string"}}},"required":["cluster_definition","distributed_validators","signature_aggregate","lock_hash","node_signatures"]},"DistributedValidatorStateResponse":{"type":"object","properties":{"index":{"type":"string","example":"12345"},"status":{"type":"string","example":"active_ongoing"},"balance":{"type":"string","example":"32"}},"required":["index","status","balance"]},"LidoExitBlob":{"type":"object","properties":{}},"ExitMessageDto":{"type":"object","properties":{"epoch":{"type":"string","example":"162304"},"validator_index":{"type":"string","example":"42"}},"required":["epoch","validator_index"]},"SignedExitMessageDto":{"type":"object","properties":{"message":{"$ref":"#/components/schemas/ExitMessageDto"},"signature":{"type":"string","example":""}},"required":["message","signature"]},"LidoExitBlobDto":{"type":"object","properties":{"public_key":{"type":"string","example":"0x8b69c67720c909423d7edc5d3a7554e1d1e50f6d7d5f8d18548d68daf424e536afba8b31fbd15df1970ba4af4a7d944c"},"signed_exit_message":{"$ref":"#/components/schemas/SignedExitMessageDto"}},"required":["public_key","signed_exit_message"]},"LidoExitsDto":{"type":"object","properties":{"partial_exits":{"type":"array","items":{"$ref":"#/components/schemas/LidoExitBlobDto"}},"share_idx":{"type":"number","example":42},"signature":{"type":"string","example":""}},"required":["partial_exits","share_idx","signature"]},"ClusterEffectivenessResponse":{"type":"object","properties":{"oneDay":{"type":"number","description":"Cluster effectiveness for the previous day."},"sevenDay":{"type":"number","description":"Cluster effectiveness for the previous 7 days."},"thirtyDay":{"type":"number","description":"Cluster effectiveness for the previous 30 days."},"all":{"type":"number","description":"Cluster effectiveness for alltime."}},"required":["oneDay","sevenDay","thirtyDay","all"]}}}}}')}}]);
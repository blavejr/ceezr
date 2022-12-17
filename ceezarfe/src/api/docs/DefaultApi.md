# PokemonCeezr.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appControllerGetHello**](DefaultApi.md#appControllerGetHello) | **GET** / | 
[**pokemonControllerCreate**](DefaultApi.md#pokemonControllerCreate) | **POST** /pokemon | 
[**pokemonControllerDamage**](DefaultApi.md#pokemonControllerDamage) | **GET** /pokemon/damage | 
[**pokemonControllerFindAll**](DefaultApi.md#pokemonControllerFindAll) | **GET** /pokemon | 
[**pokemonControllerFindOne**](DefaultApi.md#pokemonControllerFindOne) | **GET** /pokemon/{id} | 
[**pokemonControllerRemove**](DefaultApi.md#pokemonControllerRemove) | **DELETE** /pokemon/{id} | 
[**pokemonControllerUpdate**](DefaultApi.md#pokemonControllerUpdate) | **PATCH** /pokemon/{id} | 



## appControllerGetHello

> String appControllerGetHello()



### Example

```javascript
import PokemonCeezr from 'pokemon_ceezr';

let apiInstance = new PokemonCeezr.DefaultApi();
apiInstance.appControllerGetHello((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pokemonControllerCreate

> Object pokemonControllerCreate(createPokemonDto)



### Example

```javascript
import PokemonCeezr from 'pokemon_ceezr';
let defaultClient = PokemonCeezr.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new PokemonCeezr.DefaultApi();
let createPokemonDto = new PokemonCeezr.CreatePokemonDto(); // CreatePokemonDto | 
apiInstance.pokemonControllerCreate(createPokemonDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPokemonDto** | [**CreatePokemonDto**](CreatePokemonDto.md)|  | 

### Return type

**Object**

### Authorization

[basic](../README.md#basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pokemonControllerDamage

> Number pokemonControllerDamage(attackerId, defenderId)



### Example

```javascript
import PokemonCeezr from 'pokemon_ceezr';
let defaultClient = PokemonCeezr.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new PokemonCeezr.DefaultApi();
let attackerId = 3.4; // Number | 
let defenderId = 3.4; // Number | 
apiInstance.pokemonControllerDamage(attackerId, defenderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attackerId** | **Number**|  | 
 **defenderId** | **Number**|  | 

### Return type

**Number**

### Authorization

[basic](../README.md#basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pokemonControllerFindAll

> [PokemonEntity] pokemonControllerFindAll(page, limit)



### Example

```javascript
import PokemonCeezr from 'pokemon_ceezr';
let defaultClient = PokemonCeezr.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new PokemonCeezr.DefaultApi();
let page = 3.4; // Number | 
let limit = 3.4; // Number | 
apiInstance.pokemonControllerFindAll(page, limit, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | 
 **limit** | **Number**|  | 

### Return type

[**[PokemonEntity]**](PokemonEntity.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pokemonControllerFindOne

> PokemonEntity pokemonControllerFindOne(id)



### Example

```javascript
import PokemonCeezr from 'pokemon_ceezr';
let defaultClient = PokemonCeezr.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new PokemonCeezr.DefaultApi();
let id = 3.4; // Number | 
apiInstance.pokemonControllerFindOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**PokemonEntity**](PokemonEntity.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pokemonControllerRemove

> pokemonControllerRemove(id)



### Example

```javascript
import PokemonCeezr from 'pokemon_ceezr';
let defaultClient = PokemonCeezr.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new PokemonCeezr.DefaultApi();
let id = 3.4; // Number | 
apiInstance.pokemonControllerRemove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## pokemonControllerUpdate

> PokemonEntity pokemonControllerUpdate(id, updatePokemonDto)



### Example

```javascript
import PokemonCeezr from 'pokemon_ceezr';
let defaultClient = PokemonCeezr.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new PokemonCeezr.DefaultApi();
let id = 3.4; // Number | 
let updatePokemonDto = new PokemonCeezr.UpdatePokemonDto(); // UpdatePokemonDto | 
apiInstance.pokemonControllerUpdate(id, updatePokemonDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updatePokemonDto** | [**UpdatePokemonDto**](UpdatePokemonDto.md)|  | 

### Return type

[**PokemonEntity**](PokemonEntity.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


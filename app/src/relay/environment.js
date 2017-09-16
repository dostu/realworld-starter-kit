import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const url = 'https://api.graph.cool/relay/v1/cj7n6ph270f6h0122cek42vvs'

const fetchQuery = async (operation, variables, cacheConfig, uploadables) => {
  const token = localStorage.getItem('token')

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  })

  const json = await response.json()

  if (json.errors) {
    throw json.errors
  }

  return json
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

const environment = new Environment({
  network,
  store
})

export default environment

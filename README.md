# Aiza ReactJS hooks helper

- React hooks to load Aiza NFT data, metadata and content.
- [@htsoft/aiza-react-ui](https://github.com/jack-ht/aiza-react-ui) a library to render NFT components/pages on a ReactJS webpage.  
  <br/>

## Environment

- NodeJS version >= `v14.17.5`

## How to use

1.  First install by run

    ```bash
    yarn add @htsoft/aiza-react-hooks
    ```

1.  Import and use the hooks in your react:

    ```ts
    import { useNFT, useNFTMetadata } from '@htsoft/aiza-react-hooks';

    function MyNFT() {
      const { data } = useNFT('88');
      const { metadata } = useNFTMetadata(data && data.metadataURI);

      return (
        <div>
          <p> { metadata.description } </p>
          <p> Owned by: {data.owner.id } </p>
        </div>
      );
    }
    ```

1.  List of hooks:
    | Hook | Usage |
    | -- | -- |
    | [useNFT](docs/useNFT.md) | Fetches on-chain NFT data |
    | [useAuctions](docs/useAuctions.md) | Fetches list of auctions given one or more curators from the Aiza auction house |
    | [useNFTMetadata](docs/useNFTMetadata.md) | Fetches NFT metadata from a URL |
    | [useNFTContent](docs/useNFTContent.md) | Fetches text from server to render content URL |

1.  Network configuration is wrapped by `NFTFetchConfiguration` component.

      ```ts
      import { NFTFetchConfiguration } from '@htsoft/aiza-react-hooks';
      ```

## Data is fetched from:

1. TheGraph for auction information, zNFT information, and currency information
1. Direct metadata URIs for zNFT metadata
1. Opensea for non-aiza tracked NFTs
   <br/>

# Development:

1. Clone source
   ```bash
   git clone https://github.com/AizaNFT/base-react-hooks.git
   ```
1. Install dependencies
   ```bash
   yarn
   ```
1. Build package
   ```
   yarn build
   ```
1. Test UT
   ```
   yarn test
   ```
1. Update graphQL (Optional)
   ```
   yarn update-schemas
   ```
1. Regenerate types (Optional)
   ```
   yarn gen-types
   ```

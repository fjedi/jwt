process.env.AUTH_JWT_SECRET = 'j5qSP6ZhUcjg5cnVtL8qMtXFmbcE9NsX';
import { encodeJWT, decodeJWT } from '../src';

const VALID_JWT_STRING =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDQwOTg5NDcsInBheWxvYWQiOnsiY3JlYXRlZEF0IjoxNjA0MDk4OTQ3MDc4LCJpc1VzZXIiOnRydWUsInByb3ZpZGVyIjoiZW1haWwiLCJyZW1vdGVJZCI6ImRldkBmamVkaS5jb20ifSwicHJvdmlkZXIiOiJsb2NhbCIsInN1YiI6IjQ3ODVhZDcwLWFlOTMtMTFlYS1iZjU1LWMxNDk3YWYxZDgxMSJ9.7RbJ4rcfmaBnQwi-w4XHTs5ZwkjvKIERE5lesIvdTXTkWyXpZMDdtOE6GtglWX78AnCfwkRbEmBSgjbm2JqBrw';
const INVALID_JWT_STRING = 'nunmeliundinnijvustaturocludjezawa';
const VALID_JWT_PAYLOAD = {
  iat: 1604098947,
  payload: { createdAt: 1604098947078, isUser: true, provider: 'email', remoteId: 'dev@fjedi.com' },
  provider: 'local',
  sub: '4785ad70-ae93-11ea-bf55-c1497af1d811',
};

describe('Encoding and decoding JWT', function () {
  it('Should encode payload and get valid jsonwebtoken', async function () {
    const result = encodeJWT(VALID_JWT_PAYLOAD);

    expect(result).toBe(VALID_JWT_STRING);
  });

  it('Should get payload from valid jsonwebtoken', async function () {
    const result = decodeJWT(VALID_JWT_STRING);

    expect(result).toMatchObject(VALID_JWT_PAYLOAD);
  });

  it('Should fail to get payload from invalid jsonwebtoken', async function () {
    expect(() => decodeJWT(INVALID_JWT_STRING)).toThrow();
  });
});

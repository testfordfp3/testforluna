function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, 'travel.rakuten.co.jp')) return 'PROXY stg.checkproxy.rakuten-it.com:9502';

    // RUNA
    if (dnsDomainIs(host, 's-cdn.rmp.rakuten.co.jp')) return 'stg.checkproxy.rakuten-it.com:9502';
    if (dnsDomainIs(host, 's-ad.rmp.rakuten.co.jp')) return 'stg.checkproxy.rakuten-it.com:9502';

    return 'DIRECT';
}

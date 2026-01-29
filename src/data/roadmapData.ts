// Backend Engineering Roadmap Data Structure
// Hierarchy: DOMAIN → TOPIC → SUBTOPICS

export type TopicType = "core" | "advanced" | "optional";

export interface Subtopic {
  id: string;
  title: string;
  completed?: boolean;
}

export interface Topic {
  id: string;
  title: string;
  type: TopicType;
  estimatedTime: string;
  subtopics: Subtopic[];
}

export interface Domain {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  topics: Topic[];
}

export interface RoadmapData {
  domains: Domain[];
}

export const roadmapData: RoadmapData = {
  domains: [
    {
      id: "operating-systems",
      title: "Operating Systems",
      description: "Foundation of how computers manage processes, memory, and resources",
      icon: "Cpu",
      colorClass: "domain-os",
      topics: [
        {
          id: "processes-threads",
          title: "Processes & Threads",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "pt-1", title: "Process vs Thread differences" },
            { id: "pt-2", title: "Context switching mechanics" },
            { id: "pt-3", title: "Process states (new, ready, running, waiting, terminated)" },
            { id: "pt-4", title: "Multithreading vs Multiprocessing" },
            { id: "pt-5", title: "Thread synchronization basics" },
          ],
        },
        {
          id: "memory-management",
          title: "Memory Management",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "mm-1", title: "Virtual memory concept" },
            { id: "mm-2", title: "Paging and segmentation" },
            { id: "mm-3", title: "Page replacement algorithms" },
            { id: "mm-4", title: "Stack vs Heap memory" },
            { id: "mm-5", title: "Memory leaks and prevention" },
          ],
        },
        {
          id: "concurrency",
          title: "Concurrency",
          type: "core",
          estimatedTime: "6 hrs",
          subtopics: [
            { id: "cc-1", title: "Race conditions" },
            { id: "cc-2", title: "Deadlocks and prevention strategies" },
            { id: "cc-3", title: "Mutex vs Semaphore" },
            { id: "cc-4", title: "Critical section problem" },
            { id: "cc-5", title: "Producer-consumer problem" },
          ],
        },
        {
          id: "cpu-scheduling",
          title: "CPU Scheduling",
          type: "core",
          estimatedTime: "3 hrs",
          subtopics: [
            { id: "cs-1", title: "FCFS, Round Robin, Priority scheduling" },
            { id: "cs-2", title: "Context switching overhead" },
            { id: "cs-3", title: "Preemptive vs Non-preemptive scheduling" },
            { id: "cs-4", title: "Scheduling algorithm comparison" },
          ],
        },
        {
          id: "file-systems",
          title: "File Systems & IPC",
          type: "advanced",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "fs-1", title: "Inodes and file permissions" },
            { id: "fs-2", title: "Hard vs Soft links" },
            { id: "fs-3", title: "Pipes and shared memory" },
            { id: "fs-4", title: "Message queues and sockets" },
          ],
        },
      ],
    },
    {
      id: "computer-networks",
      title: "Computer Networks",
      description: "How data travels across the internet and network protocols",
      icon: "Network",
      colorClass: "domain-networks",
      topics: [
        {
          id: "osi-tcpip",
          title: "OSI & TCP/IP Models",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "osi-1", title: "7 layers of OSI model" },
            { id: "osi-2", title: "TCP/IP 4-layer model" },
            { id: "osi-3", title: "Protocols at each layer" },
            { id: "osi-4", title: "TCP vs UDP comparison" },
          ],
        },
        {
          id: "http-protocols",
          title: "HTTP & Web Protocols",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "http-1", title: "HTTP methods (GET, POST, PUT, DELETE, PATCH)" },
            { id: "http-2", title: "Status codes (2xx, 4xx, 5xx)" },
            { id: "http-3", title: "Headers (Authorization, Content-Type, Cache-Control)" },
            { id: "http-4", title: "HTTP/1.1 vs HTTP/2 vs HTTP/3" },
            { id: "http-5", title: "Cookies, sessions, and tokens" },
          ],
        },
        {
          id: "dns-networking",
          title: "DNS & Networking",
          type: "core",
          estimatedTime: "3 hrs",
          subtopics: [
            { id: "dns-1", title: "How DNS works" },
            { id: "dns-2", title: "Domain registration and records" },
            { id: "dns-3", title: "CDN basics" },
            { id: "dns-4", title: "Load balancing fundamentals" },
          ],
        },
        {
          id: "security-basics",
          title: "Security Basics",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "sec-1", title: "SSL/TLS basics and HTTPS" },
            { id: "sec-2", title: "JWT tokens" },
            { id: "sec-3", title: "OAuth 2.0 flow" },
            { id: "sec-4", title: "CORS, CSRF, XSS prevention" },
          ],
        },
        {
          id: "realtime-protocols",
          title: "Real-Time Protocols",
          type: "advanced",
          estimatedTime: "3 hrs",
          subtopics: [
            { id: "rt-1", title: "WebSockets" },
            { id: "rt-2", title: "Server-Sent Events (SSE)" },
            { id: "rt-3", title: "Long polling vs Short polling" },
            { id: "rt-4", title: "gRPC and Protocol Buffers" },
          ],
        },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      description: "Data storage, querying, indexing, and database design patterns",
      icon: "Database",
      colorClass: "domain-databases",
      topics: [
        {
          id: "sql-fundamentals",
          title: "SQL Fundamentals",
          type: "core",
          estimatedTime: "6 hrs",
          subtopics: [
            { id: "sql-1", title: "SELECT, JOINs (inner, left, right, full)" },
            { id: "sql-2", title: "GROUP BY, HAVING, aggregate functions" },
            { id: "sql-3", title: "Subqueries and nested queries" },
            { id: "sql-4", title: "Window functions (ROW_NUMBER, RANK, LAG, LEAD)" },
            { id: "sql-5", title: "UNION vs UNION ALL" },
          ],
        },
        {
          id: "database-design",
          title: "Database Design",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "dd-1", title: "Normalization (1NF, 2NF, 3NF)" },
            { id: "dd-2", title: "When to denormalize" },
            { id: "dd-3", title: "Primary, foreign, composite keys" },
            { id: "dd-4", title: "ER diagrams" },
          ],
        },
        {
          id: "indexing",
          title: "Indexing",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "idx-1", title: "What indexes are and how they work" },
            { id: "idx-2", title: "B-tree vs Hash index" },
            { id: "idx-3", title: "Clustered vs Non-clustered index" },
            { id: "idx-4", title: "Composite indexes" },
            { id: "idx-5", title: "When indexes help vs hurt" },
          ],
        },
        {
          id: "transactions-acid",
          title: "Transactions & ACID",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "acid-1", title: "Atomicity, Consistency, Isolation, Durability" },
            { id: "acid-2", title: "Isolation levels (4 types)" },
            { id: "acid-3", title: "Dirty reads, phantom reads, non-repeatable reads" },
            { id: "acid-4", title: "Commit, rollback, savepoints" },
          ],
        },
        {
          id: "concurrency-control",
          title: "Concurrency Control",
          type: "advanced",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "dcc-1", title: "Locking mechanisms (shared, exclusive)" },
            { id: "dcc-2", title: "Optimistic vs Pessimistic locking" },
            { id: "dcc-3", title: "N+1 query problem" },
            { id: "dcc-4", title: "Connection pooling" },
          ],
        },
        {
          id: "nosql-databases",
          title: "NoSQL Databases",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "nosql-1", title: "When to use SQL vs NoSQL" },
            { id: "nosql-2", title: "CAP theorem" },
            { id: "nosql-3", title: "Document stores (MongoDB)" },
            { id: "nosql-4", title: "Key-Value stores (Redis, DynamoDB)" },
            { id: "nosql-5", title: "Graph databases (Neo4j)" },
          ],
        },
      ],
    },
    {
      id: "backend-development",
      title: "Backend Development",
      description: "Server-side programming, APIs, and application architecture",
      icon: "Server",
      colorClass: "domain-backend",
      topics: [
        {
          id: "rest-api-design",
          title: "REST API Design",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "rest-1", title: "Resource naming conventions" },
            { id: "rest-2", title: "HTTP methods and status codes" },
            { id: "rest-3", title: "API versioning strategies" },
            { id: "rest-4", title: "Swagger/OpenAPI documentation" },
            { id: "rest-5", title: "Rate limiting" },
          ],
        },
        {
          id: "authentication",
          title: "Authentication & Authorization",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "auth-1", title: "Session-based authentication" },
            { id: "auth-2", title: "JWT tokens implementation" },
            { id: "auth-3", title: "OAuth 2.0 flows" },
            { id: "auth-4", title: "Role-based access control (RBAC)" },
          ],
        },
        {
          id: "python-backend",
          title: "Python Backend",
          type: "optional",
          estimatedTime: "8 hrs",
          subtopics: [
            { id: "py-1", title: "FastAPI or Django framework" },
            { id: "py-2", title: "Async programming (asyncio)" },
            { id: "py-3", title: "ORM (SQLAlchemy or Django ORM)" },
            { id: "py-4", title: "Testing with pytest" },
          ],
        },
        {
          id: "oop-solid",
          title: "OOP & SOLID",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "oop-1", title: "4 Pillars: Encapsulation, Abstraction, Inheritance, Polymorphism" },
            { id: "oop-2", title: "Single Responsibility & Open/Closed" },
            { id: "oop-3", title: "Liskov Substitution & Interface Segregation" },
            { id: "oop-4", title: "Dependency Inversion" },
          ],
        },
        {
          id: "design-patterns",
          title: "Design Patterns",
          type: "advanced",
          estimatedTime: "6 hrs",
          subtopics: [
            { id: "dp-1", title: "Creational: Singleton, Factory" },
            { id: "dp-2", title: "Structural: Decorator, Adapter" },
            { id: "dp-3", title: "Behavioral: Observer, Strategy" },
            { id: "dp-4", title: "When to use each pattern" },
          ],
        },
      ],
    },
    {
      id: "system-design",
      title: "System Design",
      description: "Designing scalable, reliable distributed systems",
      icon: "Boxes",
      colorClass: "domain-system",
      topics: [
        {
          id: "scalability",
          title: "Scalability Basics",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "scale-1", title: "Horizontal vs Vertical scaling" },
            { id: "scale-2", title: "Load balancing strategies" },
            { id: "scale-3", title: "Stateless vs Stateful services" },
            { id: "scale-4", title: "Database scaling patterns" },
          ],
        },
        {
          id: "caching",
          title: "Caching Strategies",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "cache-1", title: "Cache locations (client, CDN, server, DB)" },
            { id: "cache-2", title: "Cache invalidation strategies" },
            { id: "cache-3", title: "Eviction policies (LRU, LFU)" },
            { id: "cache-4", title: "Redis and Memcached" },
            { id: "cache-5", title: "Cache warming" },
          ],
        },
        {
          id: "db-scaling",
          title: "Database Scaling",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "dbs-1", title: "Replication (master-slave, master-master)" },
            { id: "dbs-2", title: "Sharding strategies" },
            { id: "dbs-3", title: "Read replicas" },
            { id: "dbs-4", title: "Connection pooling" },
          ],
        },
        {
          id: "message-queues",
          title: "Message Queues",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "mq-1", title: "RabbitMQ basics" },
            { id: "mq-2", title: "Apache Kafka fundamentals" },
            { id: "mq-3", title: "Pub/Sub patterns" },
            { id: "mq-4", title: "Event-driven architecture" },
          ],
        },
        {
          id: "architecture-patterns",
          title: "Architecture Patterns",
          type: "advanced",
          estimatedTime: "6 hrs",
          subtopics: [
            { id: "arch-1", title: "Monolith vs Microservices" },
            { id: "arch-2", title: "Serverless architecture" },
            { id: "arch-3", title: "Event Sourcing & CQRS" },
            { id: "arch-4", title: "Service Mesh" },
          ],
        },
        {
          id: "resilience",
          title: "Resilience Patterns",
          type: "advanced",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "res-1", title: "Circuit Breaker pattern" },
            { id: "res-2", title: "Graceful degradation" },
            { id: "res-3", title: "Throttling and Backpressure" },
            { id: "res-4", title: "Bulkhead pattern" },
          ],
        },
      ],
    },
    {
      id: "security",
      title: "Security",
      description: "Protecting applications and data from threats",
      icon: "Shield",
      colorClass: "domain-security",
      topics: [
        {
          id: "web-security",
          title: "Web Security",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "ws-1", title: "Cross-Site Scripting (XSS) prevention" },
            { id: "ws-2", title: "Cross-Site Request Forgery (CSRF)" },
            { id: "ws-3", title: "SQL Injection prevention" },
            { id: "ws-4", title: "Input validation and sanitization" },
          ],
        },
        {
          id: "encryption",
          title: "Encryption & Hashing",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "enc-1", title: "Symmetric vs Asymmetric encryption" },
            { id: "enc-2", title: "Hashing algorithms (bcrypt, SHA)" },
            { id: "enc-3", title: "Salting passwords" },
            { id: "enc-4", title: "TLS/SSL certificates" },
          ],
        },
        {
          id: "secure-auth",
          title: "Secure Authentication",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "sa-1", title: "Secure password storage" },
            { id: "sa-2", title: "Multi-factor authentication" },
            { id: "sa-3", title: "Token security best practices" },
            { id: "sa-4", title: "Session management" },
          ],
        },
        {
          id: "api-security",
          title: "API Security",
          type: "advanced",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "apis-1", title: "API key management" },
            { id: "apis-2", title: "Rate limiting implementation" },
            { id: "apis-3", title: "CORS configuration" },
            { id: "apis-4", title: "Request signing" },
          ],
        },
      ],
    },
    {
      id: "devops-tools",
      title: "DevOps & Tools",
      description: "Development operations, deployment, and essential tooling",
      icon: "Wrench",
      colorClass: "domain-devops",
      topics: [
        {
          id: "git-version-control",
          title: "Git & Version Control",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "git-1", title: "Branching and merging strategies" },
            { id: "git-2", title: "Rebasing vs Merging" },
            { id: "git-3", title: "Conflict resolution" },
            { id: "git-4", title: "Git workflows (GitFlow, Trunk-based)" },
          ],
        },
        {
          id: "docker-containers",
          title: "Docker & Containers",
          type: "core",
          estimatedTime: "6 hrs",
          subtopics: [
            { id: "dock-1", title: "Dockerfile basics" },
            { id: "dock-2", title: "Docker Compose" },
            { id: "dock-3", title: "Container vs Virtualization" },
            { id: "dock-4", title: "Image optimization" },
            { id: "dock-5", title: "Container networking" },
          ],
        },
        {
          id: "cicd",
          title: "CI/CD Pipelines",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "cicd-1", title: "Pipeline fundamentals" },
            { id: "cicd-2", title: "Automated testing in CI" },
            { id: "cicd-3", title: "Deployment strategies (blue-green, canary)" },
            { id: "cicd-4", title: "GitHub Actions / GitLab CI" },
          ],
        },
        {
          id: "linux-bash",
          title: "Linux & Bash",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "linux-1", title: "Essential Linux commands" },
            { id: "linux-2", title: "File permissions and ownership" },
            { id: "linux-3", title: "Process management" },
            { id: "linux-4", title: "Shell scripting basics" },
          ],
        },
        {
          id: "monitoring",
          title: "Monitoring & Observability",
          type: "advanced",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "mon-1", title: "Metrics, Logging, Tracing" },
            { id: "mon-2", title: "Prometheus and Grafana" },
            { id: "mon-3", title: "ELK Stack basics" },
            { id: "mon-4", title: "Alerting strategies" },
          ],
        },
        {
          id: "kubernetes",
          title: "Kubernetes Basics",
          type: "advanced",
          estimatedTime: "8 hrs",
          subtopics: [
            { id: "k8s-1", title: "Pods, Services, Deployments" },
            { id: "k8s-2", title: "ConfigMaps and Secrets" },
            { id: "k8s-3", title: "Service discovery" },
            { id: "k8s-4", title: "Rolling updates" },
          ],
        },
      ],
    },
    {
      id: "dsa",
      title: "DSA",
      description: "Data Structures & Algorithms for technical interviews",
      icon: "Code",
      colorClass: "domain-dsa",
      topics: [
        {
          id: "arrays-strings",
          title: "Arrays & Strings",
          type: "core",
          estimatedTime: "8 hrs",
          subtopics: [
            { id: "arr-1", title: "Two pointers technique" },
            { id: "arr-2", title: "Sliding window" },
            { id: "arr-3", title: "Prefix sums" },
            { id: "arr-4", title: "Kadane's algorithm" },
          ],
        },
        {
          id: "hash-tables",
          title: "Hash Tables",
          type: "core",
          estimatedTime: "4 hrs",
          subtopics: [
            { id: "hash-1", title: "Collision handling" },
            { id: "hash-2", title: "When to use hash tables" },
            { id: "hash-3", title: "Time complexity analysis" },
          ],
        },
        {
          id: "linked-lists",
          title: "Linked Lists",
          type: "core",
          estimatedTime: "5 hrs",
          subtopics: [
            { id: "ll-1", title: "Reversal techniques" },
            { id: "ll-2", title: "Cycle detection" },
            { id: "ll-3", title: "Dummy nodes" },
            { id: "ll-4", title: "Fast/slow pointers" },
          ],
        },
        {
          id: "trees-graphs",
          title: "Trees & Graphs",
          type: "core",
          estimatedTime: "10 hrs",
          subtopics: [
            { id: "tg-1", title: "Binary tree traversals" },
            { id: "tg-2", title: "BST operations" },
            { id: "tg-3", title: "DFS and BFS" },
            { id: "tg-4", title: "Topological sort" },
            { id: "tg-5", title: "Graph representations" },
          ],
        },
        {
          id: "sorting-searching",
          title: "Sorting & Searching",
          type: "core",
          estimatedTime: "6 hrs",
          subtopics: [
            { id: "ss-1", title: "Quicksort and Mergesort" },
            { id: "ss-2", title: "Binary search variations" },
            { id: "ss-3", title: "Time/Space complexity analysis" },
          ],
        },
        {
          id: "dynamic-programming",
          title: "Dynamic Programming",
          type: "advanced",
          estimatedTime: "12 hrs",
          subtopics: [
            { id: "dp-1", title: "1D DP (climbing stairs, coin change)" },
            { id: "dp-2", title: "2D DP (LCS, edit distance)" },
            { id: "dp-3", title: "Knapsack problem" },
            { id: "dp-4", title: "Memoization vs Tabulation" },
          ],
        },
        {
          id: "recursion-backtracking",
          title: "Recursion & Backtracking",
          type: "advanced",
          estimatedTime: "6 hrs",
          subtopics: [
            { id: "rb-1", title: "Subsets and permutations" },
            { id: "rb-2", title: "Combinations" },
            { id: "rb-3", title: "Backtracking template" },
          ],
        },
      ],
    },
  ],
};

// Helper function to get all topics across all domains
export const getAllTopics = (): (Topic & { domainId: string; domainTitle: string; colorClass: string })[] => {
  return roadmapData.domains.flatMap((domain) =>
    domain.topics.map((topic) => ({
      ...topic,
      domainId: domain.id,
      domainTitle: domain.title,
      colorClass: domain.colorClass,
    }))
  );
};

// Helper function to get total counts
export const getRoadmapStats = () => {
  const allTopics = getAllTopics();
  const allSubtopics = allTopics.flatMap((t) => t.subtopics);
  
  return {
    totalDomains: roadmapData.domains.length,
    totalTopics: allTopics.length,
    totalSubtopics: allSubtopics.length,
    coreTopics: allTopics.filter((t) => t.type === "core").length,
    advancedTopics: allTopics.filter((t) => t.type === "advanced").length,
    optionalTopics: allTopics.filter((t) => t.type === "optional").length,
  };
};
